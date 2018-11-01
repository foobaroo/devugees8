import React, { Component } from 'react'

export const MyContext = React.createContext();

export default class context extends Component {

  state = {
      x: 0
  }

  incrementX = () => {
      this.setState({
          x: this.state.x + 1
      })
  }

  render() {
    return (
        <MyContext.Provider value={{
            state: this.state,
            incrementX: this.incrementX
        }}>
        {this.props.children}
        </MyContext.Provider>
    )
  }
}
