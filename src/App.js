import React, { Component } from 'react';
import Routes from './Routes';
import fire from './config/Fire';
import Start from './Start';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:{}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div>
        {this.state.user ? (<Routes />) : (<Start />)}
      </div>
    );
  }
}

export default App;
