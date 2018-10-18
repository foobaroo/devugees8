import React, { Component } from 'react';
import './App.css';
import Fruit from './components/Fruit';

class App extends Component {
  
  state = {
    fruits: [
      { type: 'Apple', id: 1 }, 
      { type: 'Banana', id: 2 }, 
      { type: 'Lemon', id: 3 }, 
      { type: 'Kiwi', id: 4 }, 
      { type: 'Pineapple', id: 5 }    
    ]
  }
  
  removeFruit = (id) => {
    const fruits = [...this.state.fruits];
    const fruits2 = fruits.filter((f) => f.id !== id);

    this.setState({
      fruits: fruits2
    });
  }

  showColor = (color) => {
    alert('the color is ' + color);
  }

  render() {
    return (
      <div className="App">
        <h1>Components 1</h1>
        {this.state.fruits.map( (fruit) => {
          return <Fruit 
                    type={fruit.type}
                    key={fruit.id} // illegal to communicate down to child 
                    id={fruit.id} // better use this id
                    onShowColorHandler={this.showColor} 
                    onDeleteHandler={this.removeFruit}
                    />
        })}
      </div>
    );
  }
}

export default App;
