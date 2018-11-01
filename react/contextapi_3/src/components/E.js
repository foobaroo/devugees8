import React, { Component } from 'react';
import { MyContext } from '../context';

export default class C extends Component {
  render() {
    return (
      <MyContext.Consumer> 
          {
            (context) => {
                return (
                    <div>
                        E
                        <button onClick={context.dispatch.bind(this, {type: 'DECREMENT_Y'})}>decrement Y</button>
                    </div>
                )
            }
          }
      </MyContext.Consumer>
    )
  }
}
