import React, { Component } from 'react';
import './App.css';
import Letter from './layout/Letter';

class App extends Component {
  
  state = {
    alphabet: 'abcdefghijklmnopqrstuvwxyz',
    letters: []
  }

  constructor() {
    super();
    
    for(let i=0; i<this.state.alphabet.length; i++) {
      this.state.letters.push({
        type: this.state.alphabet[i].toUpperCase(),
        key: i,
        id: i
      })
    }
  }

  // task: render the letters array by using the letter component

  render() {

    let someNumbers = [<li>1</li>, <li>2</li>, <li>3</li>];

    let a = [1,2,3];

    return (
      <div className="App">
        <h1>Functional Components</h1>
        
        <ul>
          <li>1</li>
          <li>2</li>  
          <li>3</li>  
        </ul>

        <ul>
          { [<li>1</li>, <li>2</li>, <li>3</li>] }
        </ul>

        <ul>
          { someNumbers }
        </ul>

        <ul>
          { a.map( (element) => {
            return <li>{element*3}</li>
          })}  
        </ul>

      </div>      
    );
  }
}

export default App;
