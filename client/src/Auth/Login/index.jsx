import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { storeAuthToken } from 'shared/utils/authToken';
import Form from 'shared/components/Form';
import Button from 'shared/components/Button';
import Logo from 'shared/components/Logo';

import {
  LoginPage,
  LoginContainer,
  LoginHeader,
  LogoWrapper,
  LoginTitle,
  LoginForm,
  FormActions,
  RememberMeWrapper,
  Checkbox,
  CheckboxLabel,
  ForgotPasswordLink,
  SubmitButton,
  Divider,
  SignupSection,
  SignupLink,
} from './Styles';

const Login = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (values, form) => {
    try {
      setIsLoading(true);
      const { authToken } = await api.post('/authentication/login', {
        email: values.email,
        password: values.password,
        rememberMe,
      });
      storeAuthToken(authToken);
      
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('rememberMe');
      }

      toast.success('Successfully logged in!');
      history.push('/project');
    } catch (error) {
      setIsLoading(false);
      Form.handleAPIError(error, form);
    }
  };

  return (
    <LoginPage>
      <LoginContainer>
        <LoginHeader>
          <LogoWrapper>
            <Logo size={48} />
          </LogoWrapper>
          <LoginTitle>Log in to Jira Clone</LoginTitle>
        </LoginHeader>

        <Form
          enableReinitialize
          initialValues={{ email: '', password: '' }}
          validations={{
            email: [Form.is.required(), Form.is.email()],
            password: [Form.is.required(), Form.is.minLength(8)],
          }}
          onSubmit={handleSubmit}
        >
          {formikProps => (
            <LoginForm onSubmit={formikProps.handleSubmit}>
              <Form.Field.Input
                name="email"
                type="email"
                label="Email address"
                placeholder="Enter your email"
                autoComplete="email"
              />
              <Form.Field.Input
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              
              <FormActions>
                <RememberMeWrapper>
                  <Checkbox
                    type="checkbox"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                  />
                  <CheckboxLabel>Remember me</CheckboxLabel>
                </RememberMeWrapper>
                <ForgotPasswordLink href="/forgot-password">
                  Forgot password?
                </ForgotPasswordLink>
              </FormActions>

              <SubmitButton>
                <Button
                  type="submit"
                  variant="primary"
                  isWorking={isLoading}
                  disabled={isLoading}
                >
                  Log in
                </Button>
              </SubmitButton>
            </LoginForm>
          )}
        </Form>

        <Divider />

        <SignupSection>
          Don&apos;t have an account?
          <SignupLink href="/signup">Sign up</SignupLink>
        </SignupSection>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
