import React, { Component } from 'react';

class EventGenerator extends Component {
  render() {
    console.log('EventGenerator...');
    return <button onClick={this.props.handler}> {this.props.text} </button>;
  }
}

export default EventGenerator;
