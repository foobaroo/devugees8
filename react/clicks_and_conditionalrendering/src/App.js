import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    x: 0
  };

  incrementX = () => {
    // this.x++;  -> illegal to modify state directly

    // internally calls render()
    this.setState({
      x: this.state.x + 1
    });
  }

  setXTo = (newX) => {
    this.setState({
      x: newX
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Conditional Rendering & State & Clicks</h1>
        <button onClick={this.incrementX}>Increment x</button>
        <button onClick={this.setXTo.bind(this, 3)}>Set x to 3 with bind</button>
        <button onClick={() => { this.setXTo(3)}}>Set x to 3 with arrow function</button>
        <button onClick={() => {
              this.setState({
                x: 3
              });
        }}>Set x to 3 with arrow function with direct state manipulation</button>
        <h2>{this.state.x}</h2>
        <h2>{this.state.x > 5 ? 'x is greater than 5' : 'x is less or equal to 5' }</h2>
      </div>
    );
  }
}

// task:
// 
// why is the following line wrong?
// <button onClick={this.incrementX()}>Increment x</button>

export default App;
