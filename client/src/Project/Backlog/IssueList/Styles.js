import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const Container = styled.div`
  margin-top: 20px;
`;

export const IssueCount = styled.div`
  ${font.size(13)}
  color: red;
  margin-bottom: 12px;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border-bottom: 2px solid ${color.borderLight};
  background: ${color.backgroundLightest};
  ${font.size(12)}
  ${font.bold}
  color: red;
  text-transform: uppercase;
`;

export const HeaderCell = styled.div`
  ${props => props.width && `width: ${props.width}px;`}
  ${props => props.flex && `flex: 1;`}
  padding: 0 ${props => (props.width > 50 ? '12px' : '0')};
  display: flex;
  align-items: center;
`;

export const SortableHeaderCell = styled(HeaderCell)`
  ${mixin.clickable}
  &:hover {
    color: red;
  }
`;

export const SortIcon = styled.span`
  margin-left: 4px;
  ${font.size(10)}
`;

export const IssueListContainer = styled.div`
  background: #fff;
  border-radius: 3px;
`;
