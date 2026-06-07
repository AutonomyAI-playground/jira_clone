import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from 'browserHistory';
// import Project from 'Project';
// import Authenticate from 'Auth/Authenticate';
import PageError from 'shared/components/PageError';
import Board from 'Board';

const Routes = () => (
  <Router history={history}>
    <Switch>
      {/* <Redirect exact from="/" to="/project" />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/project" component={Project} /> */}
      <Route exact path="/" component={Board} />
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
