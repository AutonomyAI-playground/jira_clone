import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import { IssueStatusCopy } from 'shared/constants/issues';

import Issue from './Issue';
import { List, Title, IssuesCount, Issues } from './Styles';

const propTypes = {
  status: PropTypes.string.isRequired,
  issues: PropTypes.array.isRequired,
};

/**
 * Single status column in the kanban board.
 * Renders a droppable area for issues with the given status.
 */
const BoardList = ({ status, issues }) => {
  const listIssues = getSortedListIssues(issues, status);

  return (
    <Droppable key={status} droppableId={status}>
      {provided => (
        <List>
          <Title>
            {`${IssueStatusCopy[status]} `}
            <IssuesCount>{listIssues.length}</IssuesCount>
          </Title>
          <Issues
            {...provided.droppableProps}
            ref={provided.innerRef}
            data-testid={`board-list:${status}`}
          >
            {listIssues.map((issue, index) => (
              <Issue key={issue.id} issue={issue} index={index} />
            ))}
            {/* Placeholder maintains space during drag */}
            {provided.placeholder}
          </Issues>
        </List>
      )}
    </Droppable>
  );
};

const getSortedListIssues = (issues, status) =>
  issues.filter(issue => issue.status === status).sort((a, b) => a.listPosition - b.listPosition);

BoardList.propTypes = propTypes;

export default BoardList;
