import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from 'shared/components/Button';

import WizardRobotSvg from './WizardRobotSvg';
import {
  ErrorPage,
  ErrorPageInner,
  ErrorBox,
  IllustrationContainer,
  Title,
  Message,
} from './Styles';

const HOME_ROUTE = '/';

/**
 * 404 error page displayed for unmatched routes.
 * Shows a friendly wizard robot illustration with a call-to-action to return home.
 */
const Page404 = () => {
  const history = useHistory();

  const handleGoHome = () => {
    // Navigate to home route, which redirects to /project
    history.push(HOME_ROUTE);
  };

  return (
    <ErrorPage>
      <ErrorPageInner>
        <ErrorBox>
          <IllustrationContainer>
            <WizardRobotSvg />
          </IllustrationContainer>
          <Title>404 - Page Not Found</Title>
          <Message>
            Oops! The page you&apos;re looking for seems to have vanished into thin air. Let&apos;s
            get you back on track.
          </Message>
          <Button variant="primary" onClick={handleGoHome}>
            Go to Homepage
          </Button>
        </ErrorBox>
      </ErrorPageInner>
    </ErrorPage>
  );
};

export default Page404;
