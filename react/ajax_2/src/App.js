import React, { Component } from 'react';
import './App.css';
import Users from './components/Users'

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1>User List</h1>
        <Users />
      </div>
    );
  }
}

export default App;
