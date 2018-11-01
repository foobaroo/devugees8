import React, { Component } from 'react';
import './App.css';
import B from './components/B';
import C from './components/C';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
        
    return (
      <Provider store={store}>
      <div className="App">
        <h1>The App Component</h1>
        <B />
        <C />
      </div>
      </Provider>
    );
  }
}

export default App;
