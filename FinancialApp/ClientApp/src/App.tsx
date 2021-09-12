import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './utilities/Routes';
import LoginPage from './components/pages/LoginPage/LoginPage';
import './style/abstracts/_variables.scss';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import HomePage from './components/pages/HomePage/HomePage';
import HistoryPage from './components/pages/HistoryPage/HistoryPage';

export default () => (
  <Router>
    <Switch>
      <Route exact path={Routes.login} component={LoginPage} />
      <Route exact path={Routes.register} component={RegisterPage} />
      <Route exact path={Routes.home} component={HomePage}/>
      <Route exact path={Routes.history} component={HistoryPage}/>
      
    </Switch>
  </Router>
);