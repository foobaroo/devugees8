import React, { Component } from 'react';
import './App.css';
import User from './components/User'

class App extends Component {
  
  state = {
    userId: 1
  }

  nextUser = () => {
    this.setState({
      userId: this.state.userId + 1
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Ajax 3</h1>
        <button onClick={this.nextUser}>Next User</button>
        <User id={this.state.userId}/>
      </div>
    );
  }
}

export default App;
