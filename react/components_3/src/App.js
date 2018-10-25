import React, { Component } from 'react';
import './App.css';
import Fruits from './components/Fruits'

class App extends Component {
  render() {
        
    return (
      <div className="App">
        <h1>The Fruit Manager</h1>
        <Fruits />
      </div>
    );
  }
}

export default App;
