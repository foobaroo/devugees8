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
                        x = {context.x}, y = {context.y}
                    </div>
                )
            }
          }
      </MyContext.Consumer>
    )
  }
}
