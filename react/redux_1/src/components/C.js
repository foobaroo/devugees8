import React, { Component } from 'react'
import { connect } from 'react-redux';

class C extends Component {
  render() {
    return (
      <div>
        C
        a = {this.props.a}, b = {this.props.b}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    a: state.reducer2.a,
    b: state.reducer2.b
});

export default connect(mapStateToProps, null)(C);