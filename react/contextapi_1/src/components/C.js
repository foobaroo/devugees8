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
                        C
                        x = {context.state.x}
                    </div>
                )
            }
          }
      </MyContext.Consumer>
    )
  }
}
