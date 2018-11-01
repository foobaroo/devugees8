import React, { Component } from 'react'
import C from './C'

export default class B extends Component {
  render() {
    return (
      <div>
        B, x = {this.props.x}
        <C x={this.props.x} />
      </div>
    )
  }
}
