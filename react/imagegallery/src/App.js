import React, { Component } from 'react';
import './App.css';
import GalleryContainer from './components/GalleryContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Thumbnails from './components/Thumbnails';
import MyNavbar from './components/MyNavbar';
import NotFound from './components/NotFound';

class App extends Component {
  
  state = {
    
  }

  render() {
    return (
      <Router>
        <div className="App">
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Thumbnails} />
          <Route exact path="/gallery" component={GalleryContainer} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
