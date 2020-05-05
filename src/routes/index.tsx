import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/profile" component={Profile} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
