import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import api from 'shared/utils/api';
import toast from 'shared/utils/toast';
import { storeAuthToken } from 'shared/utils/authToken';
import { Form, Button, Logo } from 'shared/components';

import {
  LoginContainer,
  LoginCard,
  LogoContainer,
  LoginTitle,
  LoginSubtitle,
  FormElement,
  DividerContainer,
  DividerLine,
  DividerText,
  GuestLoginButton,
  FooterText,
} from './Styles';

const propTypes = {
  redirectPath: PropTypes.string,
};

const defaultProps = {
  redirectPath: '/',
};

const Login = ({ redirectPath }) => {
  const history = useHistory();
  const [isCreatingGuest, setCreatingGuest] = useState(false);

  const handleGuestLogin = async () => {
    try {
      setCreatingGuest(true);
      const { authToken } = await api.post('/authentication/guest');
      storeAuthToken(authToken);
      history.push(redirectPath);
    } catch (error) {
      toast.error(error);
      setCreatingGuest(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LogoContainer>
          <Logo size={40} />
        </LogoContainer>
        <LoginTitle>Log in to Jira</LoginTitle>
        <LoginSubtitle>Enter your details below</LoginSubtitle>

        <Form
          initialValues={{
            email: '',
            password: '',
          }}
          validations={{
            email: [Form.is.required(), Form.is.email()],
            password: [Form.is.required(), Form.is.minLength(6)],
          }}
          onSubmit={async (values, form) => {
            try {
              const { authToken } = await api.post('/authentication/login', values);
              storeAuthToken(authToken);
              history.push(redirectPath);
              toast.success('Login successful!');
            } catch (error) {
              Form.handleAPIError(error, form);
            }
          }}
        >
          <Form.Element>
            <FormElement>
              <Form.Field.Input
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
              />
            </FormElement>
            <FormElement>
              <Form.Field.Input
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
              />
            </FormElement>
            <FormElement>
              <Button type="submit" variant="primary">
                Log in
              </Button>
            </FormElement>
          </Form.Element>
        </Form>

        <DividerContainer>
          <DividerLine />
          <DividerText>OR</DividerText>
          <DividerLine />
        </DividerContainer>

        <GuestLoginButton
          variant="secondary"
          onClick={handleGuestLogin}
          isWorking={isCreatingGuest}
        >
          Continue as Guest
        </GuestLoginButton>

        <FooterText>
          This is a simplified Jira clone for demonstration purposes.
        </FooterText>
      </LoginCard>
    </LoginContainer>
  );
};

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
