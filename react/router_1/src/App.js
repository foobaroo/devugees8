import React, { Component } from 'react';
import './App.css';
import Start from './components/Start';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import NotFound from './components/layout/NotFound.js';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  render() {
    
    return (
      <Router>
      <div className="App">
        <h1>Router Example</h1>
        <div>
          <Link to="/">Start</Link>{' | '}
          <Link to="/products">Products</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Start} /> 
          <Route exact path="/products" component={Products} /> 
          <Route exact path="/productdetails/:id" component={ProductDetails} /> 
          <Route component={NotFound} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
