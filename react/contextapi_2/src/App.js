import React, { Component } from 'react';
import './App.css';
import MyProvider, { MyContext } from './context';
import A from './components/A';
import C from './components/C';

class App extends Component {
  render() {        
    return (
      <MyProvider>
        <div className="App">
          <h1>The App Component</h1>
          <A />
          <C />
        </div>
      </MyProvider>
    );
  }
}

export default App;
