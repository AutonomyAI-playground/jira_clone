import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Page404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
  background: ${color.backgroundLightest};
`;

export const Illustration = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    max-width: 280px;
    margin-bottom: 32px;
  }
`;

export const ErrorCode = styled.h1`
  margin: 0 0 16px;
  ${font.bold}
  ${font.size(72)}
  color: ${color.textDarkest};
  line-height: 1;
  
  @media (max-width: 768px) {
    ${font.size(56)}
  }
`;

export const Message = styled.h2`
  margin: 0 0 12px;
  ${font.medium}
  ${font.size(24)}
  color: ${color.danger};
  
  @media (max-width: 768px) {
    ${font.size(20)}
  }
`;

export const Description = styled.p`
  margin: 0 0 32px;
  ${font.regular}
  ${font.size(16)}
  color: ${color.textMedium};
  text-align: center;
  max-width: 480px;
  line-height: 1.5;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 8px;
`;
