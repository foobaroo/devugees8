import React, { Component } from 'react'
import User from './layout/User'
import axios from 'axios'

export default class Users extends Component {
  
  state = {
      users: null
  }

  async componentDidMount() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response);
        
        this.setState({
            users: response.data
        })
    }
    catch(error) {
        console.log( error );
    }
  }

  removeUser = (id) => {
      this.setState({
          users: this.state.users.filter((u) => u.id !== id)
      });
  }

  render() {
    return (
      <div>
        <table>
            <thead>
            <tr>
                <td>ID</td><td>Name</td><td>Email</td>
            </tr>
            </thead>
            <tbody>
        { this.state.users && this.state.users.map( (u) => {
            return <User id={u.id} name={u.name} email={u.email} key={u.id} deleteUserHandler={this.removeUser} />
        })}
            </tbody>
        </table>
      </div>
    )
  }
}
