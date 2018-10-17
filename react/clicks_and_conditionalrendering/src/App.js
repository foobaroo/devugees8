import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    x: 0,
    page: 'start'
  };

  incrementX = () => {
    // this.x++;  -> illegal to modify state directly

    // internally calls render()
    this.setState({
      x: this.state.x + 1
    });
  }

  setXTo = (newX) => {
    this.setState({
      x: newX
    });
  }

  showPage = (page) => {
    this.setState({
      page: page
    });
    // alert(this.state.page); -- will contain old value until next render()
  }

  render() {
    
    const pointer = {
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Conditional Rendering & State & Clicks</h1>
        <button onClick={this.incrementX}>Increment x</button>
        <button onClick={this.setXTo.bind(this, 3)}>Set x to 3 with bind</button>
        <button onClick={() => { this.setXTo(3)}}>Set x to 3 with arrow function</button>
        <button onClick={() => {
              this.setState({
                x: 3
              });
        }}>Set x to 3 with arrow function with direct state manipulation</button>
        <h2>{this.state.x}</h2>
        <h2>{this.state.x > 5 ? 'x is greater than 5' : 'x is less or equal to 5' }</h2>

        {/* 
          task:

          1. Create a navigation div with 3 links: Startpage, Products and About
          2. When the user clicks on any of them, the component state variable 'page' will be updated to 'start', 'products' or 'about'
          3. Create 3 divs with classes 'start', 'products' and 'about' containing some dummy content.
          4. Show the 3 divs according to the App Component's state of 'page'
      
        */}

          <div className="navigation">
            <a style={pointer} onClick={this.showPage.bind(this, 'start')}>Startpage</a> |{' '} 
            <a style={pointer} onClick={this.showPage.bind(this, 'products')}>Products</a> |{' '}
            <a style={pointer} onClick={this.showPage.bind(this, 'about')}>About</a>
          </div>

          { this.state.page === 'start' ? <div className="start">Hallo from start!</div> : null }
          { this.state.page === 'products' ? <div className="products">Hallo from products!</div> : null }
          { this.state.page === 'about' ? <div className="about">Hallo from about!</div> : null }

      </div>
    );
  }
}

// task:
// 
// why is the following line wrong?
// <button onClick={this.incrementX()}>Increment x</button>

export default App;
