import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { intersection } from 'lodash';

import useCurrentUser from 'shared/hooks/currentUser';
import api from 'shared/utils/api';
import { moveItemWithinArray } from 'shared/utils/javascript';

import IssueRow from './IssueRow';
import {
  Container,
  TableHeader,
  HeaderCell,
  SortableHeaderCell,
  SortIcon,
  IssueListContainer,
  IssueCount,
} from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  sortConfig: PropTypes.object.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};

const BacklogIssueList = ({ project, filters, sortConfig, updateLocalProjectIssues, onSort }) => {
  const { currentUserId } = useCurrentUser();

  const filteredIssues = filterIssues(project.issues, filters, currentUserId);
  const sortedIssues = sortIssues(filteredIssues, sortConfig);

  const handleIssueDrop = ({ draggableId, destination, source }) => {
    if (!destination || destination.index === source.index) return;

    const issueId = Number(draggableId);
    // Calculate new position value that maintains order between adjacent issues
    const newPosition = calculateIssueListPosition(sortedIssues, destination.index, source.index);

    api.optimisticUpdate(`/issues/${issueId}`, {
      updatedFields: { listPosition: newPosition },
      currentFields: project.issues.find(({ id }) => id === issueId),
      setLocalData: fields => updateLocalProjectIssues(issueId, fields),
    });
  };

  const renderSortIcon = field => {
    if (sortConfig.field !== field) return null;
    return <SortIcon>{sortConfig.direction === 'asc' ? '▲' : '▼'}</SortIcon>;
  };

  return (
    <Container>
      <IssueCount>
        {filteredIssues.length === project.issues.length
          ? `${filteredIssues.length} issues`
          : `${filteredIssues.length} of ${project.issues.length} issues`}
      </IssueCount>

      <TableHeader>
        <HeaderCell width={30}>{/* Drag handle */}</HeaderCell>
        <HeaderCell width={40}>{/* Type icon */}</HeaderCell>
        <SortableHeaderCell flex onClick={() => onSort('title')}>
          Title {renderSortIcon('title')}
        </SortableHeaderCell>
        <SortableHeaderCell width={80} onClick={() => onSort('priority')}>
          Priority {renderSortIcon('priority')}
        </SortableHeaderCell>
        <SortableHeaderCell width={160} onClick={() => onSort('status')}>
          Status {renderSortIcon('status')}
        </SortableHeaderCell>
        <HeaderCell width={100}>Assignees</HeaderCell>
        <SortableHeaderCell width={100} onClick={() => onSort('createdAt')}>
          Created {renderSortIcon('createdAt')}
        </SortableHeaderCell>
      </TableHeader>

      <DragDropContext onDragEnd={handleIssueDrop}>
        <Droppable droppableId="backlog-list">
          {provided => (
            <IssueListContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
              data-testid="backlog-list"
            >
              {sortedIssues.map((issue, index) => (
                <IssueRow key={issue.id} issue={issue} projectUsers={project.users} index={index} />
              ))}
              {provided.placeholder}
            </IssueListContainer>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

// Apply filters sequentially: search by title, filter by users, filter by current user, filter by recent updates
const filterIssues = (projectIssues, filters, currentUserId) => {
  const { searchTerm, userIds, myOnly, recent } = filters;
  let issues = projectIssues;

  if (searchTerm) {
    issues = issues.filter(issue => issue.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  if (userIds.length > 0) {
    issues = issues.filter(issue => intersection(issue.userIds, userIds).length > 0);
  }
  if (myOnly && currentUserId) {
    issues = issues.filter(issue => issue.userIds.includes(currentUserId));
  }
  // "Recent" means updated within the last 3 days
  if (recent) {
    issues = issues.filter(issue => moment(issue.updatedAt).isAfter(moment().subtract(3, 'days')));
  }
  return issues;
};

const sortIssues = (issues, sortConfig) => {
  const { field, direction } = sortConfig;
  const sorted = [...issues];

  sorted.sort((a, b) => {
    let aValue = a[field];
    let bValue = b[field];

    if (field === 'title') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
      return direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }

    if (field === 'priority') {
      // Priority values 5=HIGHEST, 4=HIGH, 3=MEDIUM, 2=LOW, 1=LOWEST
      // Map to sort order where lower number = higher priority
      const priorityOrder = { '5': 0, '4': 1, '3': 2, '2': 3, '1': 4 };
      aValue = priorityOrder[aValue] ?? 99;
      bValue = priorityOrder[bValue] ?? 99;
    }

    if (field === 'createdAt') {
      aValue = new Date(aValue).getTime();
      bValue = new Date(bValue).getTime();
    }

    if (field === 'listPosition') {
      // Default sort by listPosition ascending
      return aValue - bValue;
    }

    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  return sorted;
};

// Calculate fractional position between adjacent issues to maintain sort order without re-indexing all items
const calculateIssueListPosition = (issues, destinationIndex, sourceIndex) => {
  const afterDropIssues = moveItemWithinArray(issues, issues[sourceIndex], destinationIndex);

  const prevIssue = afterDropIssues[destinationIndex - 1];
  const nextIssue = afterDropIssues[destinationIndex + 1];

  let position;
  if (!prevIssue && !nextIssue) {
    // Only item in list
    position = 1;
  } else if (!prevIssue) {
    // Dropped at beginning
    position = nextIssue.listPosition - 1;
  } else if (!nextIssue) {
    // Dropped at end
    position = prevIssue.listPosition + 1;
  } else {
    // Dropped between two items - use midpoint to maintain order
    position = prevIssue.listPosition + (nextIssue.listPosition - prevIssue.listPosition) / 2;
  }

  return position;
};

BacklogIssueList.propTypes = propTypes;

export default BacklogIssueList;
