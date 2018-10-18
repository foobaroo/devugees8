import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    sometext: '',
    username: '',
    password: '',
    loggedIn1: -1,
    loggedIn2: -1
  }
  
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  login = () => {
    if(this.state.username === 'hallo' && this.state.password === 'world') {
      this.setState({
        loggedIn: 1
      })
    }
    else {
      this.setState({
        loggedIn: 0
      })
    }
  }

  /*
    task: 

    create a button "login" that calls a function "login" and
    checks if the username is "hallo" and the password is "world".
    if so, display a div underneath the login button stating with
    green color that the login was successfull. otherwise, state with red color that the login failed.
  
  */

  render() {

    return (
      <div className="App">
        <h1>Databinding 1</h1>
        <div>
          some text: <input name="sometext" onChange={this.onChange} type="text"/>
        </div>
        <div>
          you entered: {this.state.sometext}
        </div>
        <h1>Databinding 2</h1>
        <div>
          username: <input name="username" onChange={this.onChange} type="text"/>
        </div>
        <div>
          password: <input name="password" onChange={this.onChange}  type="password"/>
        </div>        
        <button onClick={this.login}>Login</button>
        { this.state.loggedIn === 1 ? <div style={{color: 'green', marginLeft: '15px' }}>Login Successfull!</div> : null }
        { this.state.loggedIn === 0 ? <div style={{color: 'red', marginLeft: '15px' }} >Login Failed!</div> : null }
      </div>
    );
  }
}

export default App;
