import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/login';
import './style/abstracts/_variables.scss';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/logins" component={Login} />
    </Switch>
  </Router>
);
