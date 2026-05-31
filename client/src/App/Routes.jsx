import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import history from 'browserHistory';
import Project from 'Project';
import Authenticate from 'Auth/Authenticate';
import Page404 from 'shared/components/Page404';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/project" />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/project" component={Project} />
      <Route component={Page404} />
    </Switch>
  </Router>
);

export default Routes;
