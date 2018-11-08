import React, { Component } from 'react';
import './App.css';
import B from './components/B';
import { connect } from 'react-redux';
import { loadData, incrementX } from './actions';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Redux + Axios</h1>
        <button onClick={this.props.incrementX}>Increment X</button>
        <button onClick={this.props.loadData}>Load Users</button>
        <B />
      </div>
    );
  }
}

export default connect(null, {loadData, incrementX})(App);
