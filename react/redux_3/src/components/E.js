import React, { Component } from 'react'
import { connect } from 'react-redux';

class C extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementC}>Increment C</button>        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  incrementC: () => dispatch({ type: 'INCREMENT_C' })
});


export default connect(null, mapDispatchToProps)(C);