import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/common/Header';
import Home from './components/Home';
import ManageClass from './components/classes/ManageClass';
import CreateEvents from './components/events/CreateEvents';
import ManageEvent from './components/events/ManageEvents';
import NotFoundPage from './components/NotFoundPage';
import Students from './components/users/UsersList';
import Edit from './components/events/EventEdit';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />>
            <Route path="/classes" component={ManageClass} />
            <Route path="/create_event" component={CreateEvents} />
            <Route path="/events" component={ManageEvent} />
            <Route path="/students" component={Students} />
            <Route path='/edit/:id' component={Edit} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
