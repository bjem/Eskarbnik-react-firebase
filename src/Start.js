import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFoundPage from './components/NotFoundPage';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';

class Start extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route component={NotFoundPage} />
          </Switch>
      </Router>
    );
  }
}

export default Start;
