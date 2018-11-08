import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    somedata: null
  }
  
  loadData = async () => {
    const result = await axios.get('http://localhost:8000/somedata');

    this.setState({
      somedata: result.data
    });
  } 

  // task: create a button "save data" that sends the post to your
  //       backend and display the result

  saveData = async () => {
    const result = await axios.post('http://localhost:8000/somedata',
    {data: 'halloworld'});

    this.setState({
      somedata: result.data
    });
  } 

  render() {
    return (
      <div className="App">
        <h1>AXIOS with own backend</h1>
        <button onClick={this.loadData}>load Data</button>
        <button onClick={this.saveData}>save Data</button>
        <div>
          {JSON.stringify(this.state.somedata) && <h2>data arrived: {JSON.stringify(this.state.somedata)}</h2>}
        </div>
      </div>
    );
  }
}

export default App;
