import React from 'react';

import { Button } from 'shared/components';
import history from 'browserHistory';

import wizardRobotImage from './assets/wizard-robot.jpg';
import { Page404, Illustration, ErrorCode, Message, Description, Actions } from './Styles';

const PageNotFound = () => {
  // Navigate to the application home page
  const handleGoHome = () => {
    history.push('/');
  };

  // Navigate to the previous page in browser history
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Page404>
      <Illustration src={wizardRobotImage} alt="Wizard Robot - Page Not Found" />
      <ErrorCode>404</ErrorCode>
      <Message>Page not found</Message>
      <Description>
        We can&apos;t seem to find the page you&apos;re looking for. It may have been moved or
        doesn&apos;t exist.
      </Description>
      <Actions>
        <Button variant="primary" onClick={handleGoHome}>
          Back to Home
        </Button>
        <Button variant="empty" onClick={handleGoBack}>
          Go Back
        </Button>
      </Actions>
    </Page404>
  );
};

export default PageNotFound;
