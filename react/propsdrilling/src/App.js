import React, { Component } from 'react';
import './App.css';
import B from './components/B';

class App extends Component {
  
  state = {
    x: 0
  }

  incrementX = () => {
    this.setState({
      x: this.state.x + 1
    })
  }

  render() {
        
    return (
      <div className="App">
        <h1>App</h1>
        <button onClick={this.incrementX}>Increment X</button>
        <B x={this.state.x} />
      </div>
    );
  }
}

export default App;
