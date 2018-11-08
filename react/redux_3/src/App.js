import React, { Component } from 'react';
import './App.css';
import A from './components/A';
import C from './components/C';
import { connect } from 'react-redux';

class App extends Component {
  
  componentDidUpdate(prevProps, prevState) {
    console.log(`CDU`);

  }

  shouldComponentUpdate(nextProps, prevState) {  
    console.log(`SCU`);

    if(nextProps.b > 10 || nextProps.c > 11) {
      this.props.resetBC();
      return false;
    }
    
    return true;
  }  
  
  render() {
    return (
      <div className="App">
        <h1>Redux 3</h1>
        <div>a = {this.props.a}, b = {this.props.b}, c = {this.props.c}</div>
        <A />
        <C />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  a: state.reducer1.a,
  b: state.reducer2.b,
  c: state.reducer2.c
});

const mapDispatchToProps = (dispatch) => ({
  resetBC: () => dispatch({ type: 'RESET_BC' })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
