import React, { Component } from 'react'
import { MyContext } from '../context';

export default class B extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {
          (context) => (
            <div>
              B 
              <button onClick={context.incrementX}>increment X</button>
            </div>
         )
        }
        </MyContext.Consumer>        
    )
  }
}
