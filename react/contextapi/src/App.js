import React, { Component } from 'react';
import ParentCmp from './ParentCmp';
import ChildGreeting from './ChildGreeting';
import ChildToggle from './ChildToggle';

class App extends Component {
  render() {
    return (
      <ParentCmp>
        <ChildGreeting />
        <ChildToggle />
      </ParentCmp>
    );
  }
}

export default App;
