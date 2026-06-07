import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  color,
  font,
  mixin,
  issueStatusColors,
  issueStatusBackgroundColors,
} from 'shared/utils/styles';
import { Avatar } from 'shared/components';

export const RowLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border-bottom: 1px solid ${color.borderLightest};
  background: ${props => (props.isBeingDragged ? '#fff' : 'transparent')};
  transition: background 0.1s;
  ${font.size(14)}

  &:hover {
    background: ${color.backgroundLightest};
  }

  ${props =>
    props.isBeingDragged &&
    `
    background: #fff;
    ${mixin.boxShadowMedium}
    transform: rotate(3deg);
  `}
`;

export const DragHandleCell = styled.div`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  ${mixin.clickable}
  ${font.size(20)}

  &:hover {
    color: red;
  }
`;

export const TypeCell = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleCell = styled.div`
  flex: 1;
  padding: 0 12px;
  ${mixin.truncateText}
  ${font.medium}
  color: red;
`;

export const PriorityCell = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StatusCell = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

export const StatusBadge = styled.div`
  ${props => mixin.tag(issueStatusBackgroundColors[props.status], issueStatusColors[props.status])}
  text-transform: uppercase;
`;

export const AssigneesCell = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-direction: row-reverse;
`;

export const AssigneeAvatar = styled(Avatar)`
  margin-left: -2px;
  box-shadow: 0 0 0 2px #fff;
`;

export const DateCell = styled.div`
  width: 100px;
  padding: 0 8px;
  color: red;
  ${font.size(13)}
  text-align: right;
`;
