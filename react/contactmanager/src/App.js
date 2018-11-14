import React, { Component } from 'react';
import './App.css';
import Contact from './components/contacts/Contact';
import Header from './components/layouts/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/Contacts';

import { Provider } from './context';

import AddContact from './components/contacts/AddContact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import EditContact from './components/contacts/EditContact';

//JSX
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Number" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
