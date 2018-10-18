import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    fruits: ['Apple', 'Banana', 'Lemon', 'Kiwi', 'Pineapple']
  };

  removeFruit = (fruit) => {
    // we find the index of the fruit named ${fruit}
    const fruitIndex = this.state.fruits.findIndex((f) => {
      return fruit === f; // returns if fruit is f
    });
    
    if(fruitIndex === -1) return;
    
    const fruits = [...this.state.fruits];
    fruits.splice(fruitIndex, 1);

    this.setState({
      fruits: fruits
    });
  }

  addFruit = (fruit) => {
    const fruits = [...this.state.fruits, fruit];
    this.setState({
      fruits: fruits
    });
  }

  render() {
    // task: convert the fruits array to an jsx array using
    //       the for loop and render it

    // let jsxArray = [];
    // for(let i=0; i<this.state.fruits.length; i++) {
    //   jsxArray.push( <li>{this.state.fruits[i]}</li> );
    // }

    // const arr = [<li>1</li>, <li>2</li>];
    return (
      <div className="App">
      <h1>Loops Part 1</h1>
      <button onClick={this.removeFruit.bind(this, 'Apple')}>Remove Apple</button>
      {/* task 
        Add a new button "AddMango" that adds a Mango the fruits array!
      */}
      <button onClick={this.addFruit.bind(this, 'Mango')}>Add Mango</button>
      <ul>
        {this.state.fruits.map( (fruit) => {
          return <li>{fruit}</li>
        })}
      </ul>
      </div>
    );
  }
}

export default App;
