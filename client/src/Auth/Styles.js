import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, ${color.backgroundLightest} 0%, ${color.backgroundLight} 100%);
  padding: 20px;
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: #fff;
  border-radius: 3px;
  ${mixin.boxShadowMedium}
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const LoginTitle = styled.h1`
  text-align: center;
  color: ${color.textDarkest};
  margin-bottom: 8px;
  ${font.size(24)}
  ${font.bold}
`;

export const LoginSubtitle = styled.p`
  text-align: center;
  color: ${color.textMedium};
  margin-bottom: 32px;
  ${font.size(14)}
  ${font.regular}
`;

export const FormElement = styled.div`
  margin-bottom: 20px;

  button[type='submit'] {
    width: 100%;
    height: 40px;
    ${font.size(15)}
  }
`;

export const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
`;

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: ${color.borderLightest};
`;

export const DividerText = styled.span`
  padding: 0 12px;
  color: ${color.textMedium};
  ${font.size(12)}
  ${font.medium}
`;

export const GuestLoginButton = styled(Button)`
  width: 100%;
  height: 40px;
  ${font.size(15)}
`;

export const FooterText = styled.p`
  text-align: center;
  color: ${color.textLight};
  margin-top: 24px;
  ${font.size(12)}
  ${font.regular}
  line-height: 1.5;
`;
