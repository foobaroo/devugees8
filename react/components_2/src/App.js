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
        id: i
      })
    }
  }

  removeLetter = (id) => {
    const letters = this.state.letters.filter( (elem) => elem.id !== id );

    this.setState({
      letters: letters
    });
  }

  render() {

    return (
      <div className="App">
        <h1>Functional Components</h1>
        
        {this.state.letters.map( (l) => {
          return <Letter 
                      type={l.type} 
                      key={l.id} 
                      id={l.id} 
                      removeLetterHandler={this.removeLetter} 
                      />
        })}
      </div>      
    );
  }
}

export default App;
