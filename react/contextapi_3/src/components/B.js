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
              <button onClick={context.dispatch.bind(this, {type: 'INCREMENT_X'})}>increment X</button>
            </div>
         )
        }
        </MyContext.Consumer>        
    )
  }
}
