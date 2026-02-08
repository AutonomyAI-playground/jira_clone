import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${color.backgroundLight};
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background: #fff;
  border-radius: 3px;
  ${mixin.boxShadowMedium}
`;

export const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 16px;
`;

export const LoginTitle = styled.h1`
  margin: 0;
  color: ${color.textDarkest};
  ${font.size(24)}
  ${font.medium}
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const RememberMeWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const Checkbox = styled.input`
  margin: 0;
  margin-right: 8px;
  cursor: pointer;
`;

export const CheckboxLabel = styled.span`
  color: ${color.textDark};
  ${font.size(14)}
`;

export const ForgotPasswordLink = styled.a`
  ${mixin.link(color.primary)}
  ${font.size(14)}
  text-decoration: none;
`;

export const SubmitButton = styled.div`
  margin-bottom: 24px;

  button {
    width: 100%;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: ${color.borderLightest};
  margin: 24px 0;
`;

export const SignupSection = styled.div`
  text-align: center;
  color: ${color.textMedium};
  ${font.size(14)}
`;

export const SignupLink = styled.a`
  ${mixin.link(color.primary)}
  margin-left: 4px;
  text-decoration: none;
`;
