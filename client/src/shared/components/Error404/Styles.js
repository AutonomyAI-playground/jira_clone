import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const ErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 64px;
  background: ${color.backgroundLight};
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  text-align: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
`;

// Gradient border effect created using background + padding technique
// The padding creates space for the gradient to show through around the inner ImageWrapper
export const GradientBorder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(135deg, #50e3c2 0%, #4a90e2 50%, #9b51e0 100%);
  padding: 8px;
  box-sizing: border-box;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

// Additional styled components for error messaging and actions
// Currently not used in the base Error404 component but available for extended error pages
export const ErrorCode = styled.h1`
  margin: 0 0 16px;
  ${font.size(48)}
  font-weight: bold;
  color: ${color.textDarkest};
`;

export const ErrorMessage = styled.h2`
  margin: 0 0 24px;
  ${font.size(24)}
  font-weight: normal;
  color: ${color.textMedium};
`;

export const ErrorDescription = styled.p`
  margin: 0 0 32px;
  ${font.size(15)}
  line-height: 1.6;
  color: ${color.textMedium};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;
