import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  state = {
    username: '',
    password: ''
  }

  login = async() => {
    const result = await axios('http://localhost:8000/login', {
      method: 'post',
      data: {
        username: this.state.username,
        password: this.state.password
      },
      withCredentials: true
    });

    if(result.data.error == 0) {
      alert('login successfull');
    }
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
