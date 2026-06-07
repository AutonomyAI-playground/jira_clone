import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from 'browserHistory';
import Project from 'Project';
// import Authenticate from 'Auth/Authenticate';
import PageError from 'shared/components/PageError';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/project" component={Project} />
      {/* <Route path="/authenticate" component={Authenticate} /> */}
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
