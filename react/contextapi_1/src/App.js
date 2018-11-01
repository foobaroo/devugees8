import React, { Component } from 'react';
import './App.css';
import MyProvider, { MyContext } from './context';
import B from './components/B';

class App extends Component {
  render() {
        
    return (
      <MyProvider>
        <MyContext.Consumer>
          {
            (context) => (
                <div className="App">
                  <h1>The App Component</h1>
                  <button onClick={context.incrementX}>increment X</button>
                  <B />
                </div>
            )
          }
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}

export default App;
