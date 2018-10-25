import React, { Component } from 'react'

export default class Test extends Component {
  
  state = {
      title: 'I am a test component',
      derivedX: null
  }

  constructor(props) {
      super(props);
      console.log(`Test component is being constructed with props = ${JSON.stringify(props)} and with state = ${JSON.stringify(this.state)}
      `);
  }

  componentDidMount() {
      console.log('Test component is being mounted...');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
      return {
          derivedX: nextProps.x * 10
      }
  }

  shouldComponentUpdate(nextProps, prevState) {
      console.log(`Test checking whether it should be updated with:
      nextProps = ${JSON.stringify(nextProps)} and prevState = ${JSON.stringify(prevState)}`);

      if(nextProps.x % 5 === 0) {
          return false;
      }
      else {
          return true;
      }
  }

  componentDidUpdate() {
      console.log('Test component updated...');
  }

  componentWillUnmount() {
      console.log('Test component will unmount...');
  }

  render() {
    return (
      <div>
        <h2>Test</h2>
        <div>x = {this.props.x}</div>
        <div>derivedX = {this.state.derivedX}</div>
      </div>
    )
  }
}
