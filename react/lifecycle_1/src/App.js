import React, { Component } from 'react';
import './App.css';
import Test from './components/Test';

class App extends Component {
  
  state = {
    showTest: true,
    x: 0
  };
  
  toggleTest = () => {
    this.setState({
      showTest: !this.state.showTest
    })
  }

  incrementX = () => {
    this.setState({
      x: this.state.x + 1
    })
  }

  render() {
        
    return (
      <div className="App">
        <h1>The Component Lifecycle</h1>
        <button onClick={this.toggleTest}>{ this.state.showTest ? 'unmount ' : 'mount '}Test</button>
        <button onClick={this.incrementX}>incrementX</button>

        { this.state.showTest ? <Test x={this.state.x} /> : null }
      </div>
    );
  }
}

export default App;
