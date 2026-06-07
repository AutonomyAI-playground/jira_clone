import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { moveItemWithinArray, insertItemIntoArray } from 'shared/utils/javascript';
import { IssueStatus } from 'shared/constants/issues';

import List from './List';
import { Lists } from './Styles';

// Mock data for demonstration - in production this would come from API
const initialIssues = [
  {
    id: 1,
    title: 'Design new landing page',
    type: 'task',
    status: 'backlog',
    priority: '3',
    listPosition: 1,
    userIds: [],
  },
  {
    id: 2,
    title: 'Fix login bug',
    type: 'bug',
    status: 'selected',
    priority: '5',
    listPosition: 1,
    userIds: [],
  },
  {
    id: 3,
    title: 'Implement user authentication',
    type: 'story',
    status: 'inprogress',
    priority: '4',
    listPosition: 1,
    userIds: [],
  },
  {
    id: 4,
    title: 'Write unit tests',
    type: 'task',
    status: 'done',
    priority: '2',
    listPosition: 1,
    userIds: [],
  },
];

/**
 * Kanban board lists component managing drag-and-drop issue reordering.
 *
 * Handles dragging issues within a single list or between different status lists,
 * calculating new positions based on surrounding issues to maintain sort order.
 */
const BoardLists = () => {
  const [issues, setIssues] = useState(initialIssues);

  const handleIssueDrop = ({ draggableId, destination, source }) => {
    // Ignore drops that don't change position (same list, same index)
    if (!isPositionChanged(source, destination)) return;

    const issueId = Number(draggableId);
    const issue = issues.find(i => i.id === issueId);

    const updatedIssue = {
      ...issue,
      status: destination.droppableId,
      listPosition: calculateIssueListPosition(issues, destination, source, issueId),
    };

    setIssues(prevIssues => prevIssues.map(i => (i.id === issueId ? updatedIssue : i)));
  };

  return (
    <DragDropContext onDragEnd={handleIssueDrop}>
      <Lists>
        {Object.values(IssueStatus).map(status => (
          <List key={status} status={status} issues={issues} />
        ))}
      </Lists>
    </DragDropContext>
  );
};

/**
 * Checks if a drag-drop operation actually changed the issue's position.
 * Returns false if dropped outside a list or in the exact same spot.
 */
const isPositionChanged = (source, destination) => {
  if (!destination) return false;
  const isSameList = destination.droppableId === source.droppableId;
  const isSamePosition = destination.index === source.index;
  return !isSameList || !isSamePosition;
};

/**
 * Calculates the new listPosition for a dropped issue based on its neighbors.
 *
 * Uses fractional positioning to avoid re-indexing all issues on every move:
 * - First item in empty list: position = 1
 * - Dropped at top: position = nextIssue.position - 1
 * - Dropped at bottom: position = prevIssue.position + 1
 * - Dropped between: position = average of neighbors (allows infinite precision)
 */
const calculateIssueListPosition = (...args) => {
  const { prevIssue, nextIssue } = getAfterDropPrevNextIssue(...args);
  let position;

  if (!prevIssue && !nextIssue) {
    position = 1;
  } else if (!prevIssue) {
    position = nextIssue.listPosition - 1;
  } else if (!nextIssue) {
    position = prevIssue.listPosition + 1;
  } else {
    position = prevIssue.listPosition + (nextIssue.listPosition - prevIssue.listPosition) / 2;
  }
  return position;
};

/**
 * Determines the issues immediately before and after the drop position.
 * Simulates the final array state to identify neighbors for position calculation.
 */
const getAfterDropPrevNextIssue = (allIssues, destination, source, droppedIssueId) => {
  const beforeDropDestinationIssues = getSortedListIssues(allIssues, destination.droppableId);
  const droppedIssue = allIssues.find(issue => issue.id === droppedIssueId);
  const isSameList = destination.droppableId === source.droppableId;

  // Move within same list or insert from another list
  const afterDropDestinationIssues = isSameList
    ? moveItemWithinArray(beforeDropDestinationIssues, droppedIssue, destination.index)
    : insertItemIntoArray(beforeDropDestinationIssues, droppedIssue, destination.index);

  return {
    prevIssue: afterDropDestinationIssues[destination.index - 1],
    nextIssue: afterDropDestinationIssues[destination.index + 1],
  };
};

/**
 * Returns all issues for a given status, sorted by listPosition ascending.
 */
const getSortedListIssues = (issues, status) =>
  issues.filter(issue => issue.status === status).sort((a, b) => a.listPosition - b.listPosition);

export default BoardLists;
