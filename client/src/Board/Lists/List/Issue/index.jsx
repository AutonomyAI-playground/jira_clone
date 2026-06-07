import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import { IssueTypeIcon, IssuePriorityIcon } from 'shared/components';

import { IssueCard, Issue, Title, Bottom } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

/**
 * Draggable issue card displaying issue title, type, and priority.
 *
 * Applies visual feedback during drag (rotation, shadow) using snapshot.isDragging.
 */
const BoardListIssue = ({ issue, index }) => {
  return (
    <Draggable draggableId={issue.id.toString()} index={index}>
      {(provided, snapshot) => (
        <IssueCard
          ref={provided.innerRef}
          data-testid="list-issue"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {/* Apply drag styling but exclude drop animation to prevent visual glitch */}
          <Issue isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}>
            <Title>{issue.title}</Title>
            <Bottom>
              <div>
                <IssueTypeIcon type={issue.type} />
                <IssuePriorityIcon priority={issue.priority} top={-1} left={4} />
              </div>
            </Bottom>
          </Issue>
        </IssueCard>
      )}
    </Draggable>
  );
};

BoardListIssue.propTypes = propTypes;

export default BoardListIssue;
