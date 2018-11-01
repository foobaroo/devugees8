import React, { Component } from 'react'
import { MyContext } from '../context';

export default class C extends Component {
  render() {
    return (
      <MyContext.Consumer> 
          {
            (context) => {
                return (
                    <div>
                        D
                        x = {context.state.x}, y = {context.state.y}
                    </div>
                )
            }
          }
      </MyContext.Consumer>
    )
  }
}
