import React, { Component } from 'react';
import './App.css';
import Start from './components/Start';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import NotFound from './components/layout/NotFound.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  render() {
    
    return (
      <Router>
      <div className="App">
        <h1>Router Example</h1>
        <div>
          <Link to="/">Start</Link>{' | '}
          <Link to="/users">Users</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Start} /> 
          <Route exact path="/users" component={Users} /> 
          <Route exact path="/userdetails/:id" component={UserDetails} /> 
          <Route component={NotFound} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
