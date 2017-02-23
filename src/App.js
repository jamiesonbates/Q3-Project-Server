import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Login from './components/Login/Login';


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Login} />
      </Router>
    );
  }
}

export default App;
