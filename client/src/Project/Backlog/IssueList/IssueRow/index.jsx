import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

import { IssueTypeIcon, IssuePriorityIcon } from 'shared/components';
import { IssueStatusCopy } from 'shared/constants/issues';
import { formatDateTimeConversational } from 'shared/utils/dateTime';

import {
  Row,
  RowLink,
  DragHandleCell,
  TypeCell,
  TitleCell,
  PriorityCell,
  StatusCell,
  AssigneesCell,
  DateCell,
  StatusBadge,
  AssigneeAvatar,
} from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  projectUsers: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
};

const BacklogIssueRow = ({ issue, projectUsers, index }) => {
  const match = useRouteMatch();

  const assignees = issue.userIds
    .map(userId => projectUsers.find(user => user.id === userId))
    .filter(Boolean);

  return (
    <Draggable draggableId={issue.id.toString()} index={index}>
      {(provided, snapshot) => (
        <RowLink
          to={`${match.url}/issues/${issue.id}`}
          ref={provided.innerRef}
          data-testid="backlog-issue-row"
          {...provided.draggableProps}
        >
          <Row isBeingDragged={snapshot.isDragging}>
            <DragHandleCell {...provided.dragHandleProps}>
              <div>⠿</div>
            </DragHandleCell>
            <TypeCell>
              <IssueTypeIcon type={issue.type} />
            </TypeCell>
            <TitleCell>{issue.title}</TitleCell>
            <PriorityCell>
              <IssuePriorityIcon priority={issue.priority} />
            </PriorityCell>
            <StatusCell>
              <StatusBadge status={issue.status}>{IssueStatusCopy[issue.status]}</StatusBadge>
            </StatusCell>
            <AssigneesCell>
              {assignees.map(user => (
                <AssigneeAvatar
                  key={user.id}
                  size={24}
                  avatarUrl={user.avatarUrl}
                  name={user.name}
                />
              ))}
            </AssigneesCell>
            <DateCell>{formatDateTimeConversational(issue.createdAt)}</DateCell>
          </Row>
        </RowLink>
      )}
    </Draggable>
  );
};

BacklogIssueRow.propTypes = propTypes;

export default BacklogIssueRow;
