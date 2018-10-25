import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  state = {
    user: null
  };
  
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then( (response) => {
      this.setState({
        user: response.data
      })
    })
    .catch( (error) => {
      console.log('error = ' + error);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Ajax 1</h1>
        { 
          this.state.user ? 
          <div>{this.state.user.name}, {this.state.user.email}</div>
          :
          null
        }
      </div>
    );
  }
}

export default App;
