import React, { Component } from 'react';
import './App.css';

import { Button } from 'reactstrap';

class App extends Component {
  
  sayHalloWorld = () => {
    alert('Hallo World');
  }
  
  render() {
    return (
      <div className="App">
        <h1>The App Component</h1>

        <Button onClick={this.sayHalloWorld}>Hallo World</Button>
      </div>
    );
  }
}

export default App;
