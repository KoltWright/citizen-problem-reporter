import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Auth from './components/Auth/Auth.js';
import Dashboard from './components/Dashboard/Dashboard.js';

export default (
  <Switch>
    <Route path='/auth' component={Auth} />
    <Route path='/' component={Dashboard} exacct />
  </Switch>
)
