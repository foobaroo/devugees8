import React, { Component } from 'react'

export default class ProductDetails extends Component {
  render() {
    return (
      <div>
        ProductDetails with id = {this.props.match.params.id}
      </div>
    )
  }
}
