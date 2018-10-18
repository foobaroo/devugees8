import React, { Component } from 'react'

export default class Fruit extends Component {
  
  state = {
      color: 'red'
  }
  
  /*
    task: create a button inside of each Fruit, that randomly
          changes the color to either red, blue, green, yellow
          or purple
  */ 

  constructor(props) {
      super(props);
      console.log('constructed Fruit component with type = ' + props.type);

      let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
      let newColor = Math.floor(Math.random() * colors.length);

      this.state.color = colors[newColor];
  }

  changeColor = () => {
      let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
      let newColor = Math.floor(Math.random() * colors.length);

      this.setState({
          color: colors[newColor]
      });
  }

  /*
  task: add a delete-button to each fruit. when the user clicks
        the delete-button, then the fruit will be removed.
  */

  render() {
    return (
      <div style={{color: this.state.color}}>
        {this.props.type}, color = {this.state.color} 
        {' '} <button onClick={this.changeColor}>Change Color</button>
        {' '} <button onClick={this.props.onShowColorHandler.bind(this, this.state.color)}>Show Color</button>
        {' '} <button onClick={this.props.onDeleteHandler.bind(this, this.props.id)}>Delete</button>
      </div>
    )
  }
}
