import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    fruits: ['Apple', 'Banana', 'Lemon', 'Kiwi', 'Pineapple'],
    fruitName: ''
  };

  // task, change method so that all i.e. Apples will be removed
  removeFruit = () => {
    // we find the index of the fruit named ${fruit}
    const fruitIndex = this.state.fruits.findIndex((f) => {
      return this.state.fruitName === f; // returns if fruit is f
    });
    
    if(fruitIndex === -1) return;
    
    const fruits = [...this.state.fruits];
    const fruits2 = fruits.filter((f) => f !== this.state.fruitName);

    this.setState({
      fruits: fruits2
    });
  }

  addFruit = () => {
    const fruits = [
      ...this.state.fruits, 
      this.state.fruitName
    ];

    this.setState({
      fruits: fruits
    });
  }

  onChangeFruitNameHandler = (event) => {
    this.setState({
      fruitName: event.target.value
    });
  }

  render() {
    /*
      task:

      Add a feature, that when the user types a name of a fruit
      in the textbox, the add button adds that particular fruit,
      not only Mango. Do the same for the remove button, so that
      not only the Apple will be removed.
    */

    return (
      <div className="App">
      <h1>Loops Part 2</h1>      
      <input type="text" onChange={this.onChangeFruitNameHandler} />
      <button onClick={this.removeFruit}>Remove</button>
      <button onClick={this.addFruit}>Add</button>
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
