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
    const result = await axios('http://localhost:8000/logout', {
      method: 'post',
      withCredentials: true
    });

    if(result.data.error == 0) {
      alert(result.data.message);
    }    
  }

  getSecretData = async() => {
    try {
      const result = await axios('http://localhost:8000/content',
        { 
          method: 'get',
          withCredentials: true
        });
      
      if(result.data.error == 0) {
        alert('protected area: ' + result.data.message);
      }
    }
    catch(e) {
      alert('Error: ' + e);
    }
  }

  onChangeHandler = e => this.setState({[e.target.name] : e.target.value})
  
  render() {
    return (
      <div className="App">
        <h1>Auth 2: Sessions</h1>
        <div>
          Username: <input type="text" name="username" onChange={this.onChangeHandler} />
          Password: <input type="password" name="password" onChange={this.onChangeHandler} />
        </div>
        <button onClick={this.login}>Login</button>
        <button onClick={this.logout}>Logout</button>
        <button onClick={this.getSecretData}>Get Secret Data</button>
      </div>
    );
  }
}

export default App;
