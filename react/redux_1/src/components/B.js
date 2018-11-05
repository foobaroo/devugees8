import React, { Component } from 'react'
import { connect } from 'react-redux';

class B extends Component {
  render() {
    return (
      <div>
        B, x = {this.props.x}
        <button onClick={this.props.incrementY}>Increment Y</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    x: state.x
});

const mapDispatchToProps = (dispatch) => ({
    incrementY: () => dispatch({ type: 'INCREMENT_Y' })
});

export default connect(mapStateToProps, mapDispatchToProps)(B);