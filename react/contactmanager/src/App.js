import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

//JSX
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Number" />
        <div className="container">
          <Contact name="John Doe" email="jdoe@gmail.com" phone="55-555-5555" />
          <Contact
            name="Karen Smith"
            email="karen@gmail.com"
            phone="22-222-2222"
          />
        </div>
      </div>
    );
  }
}

export default App;
