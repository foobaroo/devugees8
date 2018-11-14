import React, { Component } from 'react';

import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => this.setState(state => this.reducer(state, action))
  };

  async componentDidMount() {
    console.log('componentDidMount...');

    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    this.setState({ contacts: response.data });
  }

  reducer = (state, action) => {
    switch (action.type) {
      case 'DELETE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          )
        };
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, action.payload]
        };
      case 'UPDATE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.map(contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
          )
        };
      default:
        return state;
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
