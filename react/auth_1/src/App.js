import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    username: '',
    password: ''
  }

  login = async() => {

  }

  logout = async() => {
    
  }

  getSecretData = async() => {

  }

  onChangeHandler = e => this.setState({[e.target.name] : e.target.value})
  
  render() {
    return (
      <div className="App">
        <h1>Auth 1: Sessions</h1>
        <div>
          Username: <input type="text" name="username" />
          Password: <input type="password" name="password" />
        </div>
        <button onClick={this.login}>Login</button>
        <button onClick={this.logout}>Logout</button>
        <button onClick={this.getSecretData}>Get Secret Data</button>
      </div>
    );
  }
}

export default App;
