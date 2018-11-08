import React, { Component } from 'react'
import axios from 'axios';

export default class User extends Component {
  
  state = {
    user: null,
    userId: -1
  }

  loadData = async (id) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);

      this.setState({
        user: response.data,
        userId: id
      });
    }
    catch(e) {
      console.log('error = ' + e);
    }
  }
  
  componentDidMount() {
    this.loadData(this.props.id);
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log(`CDU: prevProps.id = ${prevProps.id}, prevState.userId = ${prevState.userId}, this.props.id = ${this.props.id}, this.state.id = ${this.state.userId}`)

    if(prevProps.id !== this.props.id) {
      this.loadData(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, prevState) {  
    console.log(`SCU: nextProps.id = ${nextProps.id}, prevState.userId = ${prevState.userId}, this.props.id = ${this.props.id}, this.state.id = ${this.state.userId}`)
    
    return true;
  }

  render() {
    return (
      <div>
        <h2>User = {this.props.id}</h2>
        name = { this.state.user && this.state.user.name }
      </div>
    )
  }
}
