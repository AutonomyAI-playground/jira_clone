import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

// Full-height container for the 404 page with generous padding
export const ErrorPage = styled.div`
  padding: 64px;
  background: ${color.backgroundLightest};
  min-height: 100vh;
`;

// Centered container with constrained max-width for optimal readability
export const ErrorPageInner = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 100px 0;
  /* Reduce vertical padding on shorter viewports to prevent content from being cut off */
  @media (max-height: 680px) {
    padding: 60px 0;
  }
`;

// Central content card with elevated styling to draw attention to the error message
export const ErrorBox = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 600px;
  padding: 48px 32px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const IllustrationContainer = styled.div`
  margin: 0 auto 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Primary heading with brand color to maintain visual consistency
export const Title = styled.h1`
  margin-bottom: 16px;
  ${font.size(32)}
  ${font.bold}
  color: #3e3de0;
`;

export const Message = styled.p`
  margin-bottom: 32px;
  ${font.size(16)}
  color: ${color.textMedium};
  line-height: 1.6;
`;
