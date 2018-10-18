import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    fruits: [
      { name: 'Apple', id: 1 }, 
      { name: 'Banana', id: 2 }, 
      { name: 'Lemon', id: 3 }, 
      { name: 'Kiwi', id: 4 }, 
      { name: 'Pineapple', id: 5 } 
    ],
    fruitName: '',
    lastInsertId: 5
  };

  // task, change method so that all i.e. Apples will be removed
  removeFruitByName = () => {
    const fruits = [...this.state.fruits];
    const fruits2 = fruits.filter((f) => f.name !== this.state.fruitName);

    this.setState({
      fruits: fruits2
    });
  }

  removeFruitById = (id) => {
    const fruits = [...this.state.fruits];
    const fruits2 = fruits.filter((f) => f.id !== id);

    this.setState({
      fruits: fruits2
    });    
  }

  addFruit = () => {
    const fruits = [
      ...this.state.fruits, 
      {
        name: this.state.fruitName,
        id: this.state.lastInsertId + 1
      }
    ];

    this.setState({
      fruits: fruits,
      lastInsertId: this.state.lastInsertId + 1
    });
  }

  onChangeFruitNameHandler = (event) => {
    this.setState({
      fruitName: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
      <h1>Loops Part 3</h1>      
      <input type="text" onChange={this.onChangeFruitNameHandler} />
      <button onClick={this.removeFruitByName}>Remove</button>
      <button onClick={this.addFruit}>Add</button>
      <ul>
        {this.state.fruits.map( (fruit) => {
          return <li key={fruit.id}>{fruit.name}{' '} <button onClick={this.removeFruitById.bind(this, fruit.id)}>Remove</button></li>
        })}
      </ul>
      </div>
    );
  }
}

export default App;
