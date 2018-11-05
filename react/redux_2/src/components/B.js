import React, { Component } from 'react'
import { connect } from 'react-redux';

class B extends Component {
  render() {
    return (
      <div>
        B, x = {this.props.x}, y = {this.props.y}
        <button onClick={this.props.incrementA}>Increment A</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    x: state.reducer1.x,
    y: state.reducer1.y
});

const mapDispatchToProps = (dispatch) => ({
    incrementA: () => dispatch({ type: 'INCREMENT_A' })
});

export default connect(mapStateToProps, mapDispatchToProps)(B);