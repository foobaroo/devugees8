import React, { Component } from 'react'
import { connect } from 'react-redux';

class C extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementB}>Increment B</button>        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  incrementB: () => dispatch({ type: 'INCREMENT_B' })
});


export default connect(null, mapDispatchToProps)(C);