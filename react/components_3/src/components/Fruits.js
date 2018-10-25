import React, { Component } from 'react'
import Fruit from '../layout/Fruit';

export default class Fruits extends Component {
  
  state = {
    fruits: [
        { type: 'Apple', color: 'red', id: 1, display: true },
        { type: 'Mango', color: 'green', id: 2, display: true },
        { type: 'Banana', color: 'yellow', id: 3, display: true },
        { type: 'Lemon', color: 'yellow', id: 4, display: true },
        { type: 'Kiwi', color: 'green', id: 5, display: true }
    ],
    fruitInputValue: '',
    lastInsertId: 5
  }

  addFruit = () => {
    if(this.state.fruitInputValue === '') return;
    
    let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    let newColor = Math.floor( Math.random() * colors.length );
    let fruits = [...this.state.fruits];

    fruits.push({
        type: this.state.fruitInputValue,
        color: colors[newColor],
        id: this.state.lastInsertId + 1,
        display: true
    });

    this.setState({
        fruits: fruits,
        lastInsertId: this.state.lastInsertId + 1,
        fruitInputValue: ''
    });
  }

  removeFruit = (id) => {
      const fruitIndex = this.state.fruits.findIndex(
          (f) => { return id === f.id }
      );

      if(fruitIndex === -1) return;

      let fruits = [...this.state.fruits];
      fruits.splice(fruitIndex, 1);

      this.setState({
          fruits: fruits
      });
  }

  removeFruits = () => {
      if(this.state.fruitInputValue === '') return;

      const fruits = [...this.state.fruits];
      const fruitsFiltered = fruits.filter(
          (f) => !f.type.includes(this.state.fruitInputValue)
      );

      this.setState({
          fruits: fruitsFiltered,
          fruitInputValue: ''
      });
  }

  filterFruits = () => {
      const fruits = [...this.state.fruits];

      for(let i=0; i<fruits.length; i++) {
          if(fruits[i].type.includes(this.state.fruitInputValue)) {
              fruits[i].display = true;
          }
          else {
              fruits[i].display = false
          }
      }

      this.setState({
          fruits: fruits,
          fruitInputValue: ''
      });
  }

  onFruitInputValueChange = (event) => {
      this.setState({
          fruitInputValue: event.target.value
      })
  }

  render() {

    let thumbnailContainer = {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    };

    return (
      <div>
      <input onChange={this.onFruitInputValueChange} type="text" value={this.state.fruitInputValue} />
      <button onClick={this.addFruit}>Add</button>
      <button onClick={this.removeFruits}>Remove</button>
      <button onClick={this.filterFruits}>Filter</button>
      <div style={thumbnailContainer}>
        { this.state.fruits.map( (f) => {
            return f.display ? <Fruit 
                            type={f.type} 
                            id={f.id} 
                            key={f.id} 
                            color={f.color} 
                            removeFruitHandler={this.removeFruit} /> : null
        }) }
      </div>
      </div>
    )
  }
}
