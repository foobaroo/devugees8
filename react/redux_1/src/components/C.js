import React, { Component } from 'react'
import { connect } from 'react-redux';

class C extends Component {
  render() {
    return (
      <div>
        C, y = {this.props.y}
        <button onClick={this.props.incrementX}>Increment X</button>        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  y: state.y
});

const mapDispatchToProps = (dispatch) => ({
  incrementX: () => dispatch({ type: 'INCREMENT_X' })
});


export default connect(mapStateToProps, mapDispatchToProps)(C);