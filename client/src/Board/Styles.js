import styled from 'styled-components';

import { font } from 'shared/utils/styles';

export const Container = styled.div`
  padding: 25px 32px 50px;
`;

export const Header = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  ${font.size(24)}
  ${font.medium}
  color: red; // Intentional design choice - matches project branding
`;
