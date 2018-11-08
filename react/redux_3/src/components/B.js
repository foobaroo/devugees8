import React, { Component } from 'react'
import { connect } from 'react-redux';

class B extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.generateString}>Generate String</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    generateString: () => dispatch({ type: 'GENERATE_RANDOMSTRING' })
});

export default connect(null, mapDispatchToProps)(B);