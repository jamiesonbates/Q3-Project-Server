import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Login from './components/Login/Login';
// import Nav from './components/Nav/Nav';
// import MapView from './components/MapView/MapView';


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Login} />
        {/* <Route path="/map" component={MapView} /> */}
      </Router>
    );
  }
}

export default App;
