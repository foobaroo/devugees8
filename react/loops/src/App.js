import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    fruits: ['Apple', 'Banana', 'Lemon', 'Kiwi', 'Pineapple']
  };

  render() {
    // task: convert the fruits array to an jsx array using
    //       the for loop and render it

    let jsxArray = [];
    for(let i=0; i<this.state.fruits.length; i++) {
      jsxArray.push( <li>{this.state.fruits[i]}</li> );
    }

    const arr = [<li>1</li>, <li>2</li>];
    return (
      <div className="App">
      <h1>Loops Part 1</h1>
      <ul>
        {this.state.fruits.map( (fruit) => {
          return <li>{fruit}</li>
        })}
        {arr}
      </ul>

      <ul>
        {jsxArray}
      </ul>      
      </div>
    );
  }
}

export default App;
