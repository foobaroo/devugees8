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
                        <button onClick={context.decrementY}>decrement Y</button>
                    </div>
                )
            }
          }
      </MyContext.Consumer>
    )
  }
}
