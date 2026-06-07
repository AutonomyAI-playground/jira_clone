import styled from 'styled-components';

import { font } from 'shared/utils/styles';

export const Header = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  ${font.size(24)}
  ${font.medium}
  display: flex;
  align-items: center;
  color: red;
`;

export const IssueCount = styled.span`
  ${font.size(14)}
  ${font.regular}
  color: red;
  margin-left: 8px;
`;
