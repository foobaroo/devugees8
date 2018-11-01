import React, { Component } from 'react'
export const MyContext = React.createContext();
export default class context extends Component {

  state = {
      x: 0,
      y: 0
  }

  incrementX = () => {
      this.setState({
          x: this.state.x + 1
      })
  }

  decrementY = () => {
    this.setState({
        y: this.state.y - 1
    })
  }

  render() {
    return (
        <MyContext.Provider value={{
            state: this.state,
            incrementX: this.incrementX,
            decrementY: this.decrementY
        }}>
        {this.props.children}
        </MyContext.Provider>
    )
  }
}
