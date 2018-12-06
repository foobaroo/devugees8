import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';
import User from './User';

export default class Users extends Component {
  
  state = {
      users: null
  }

  componentDidMount = async() => {
    const result = await axios('http://localhost:8000/users', 
    {
        method: 'get'
    });

    this.setState({
        users: result.data
    });
  }
  
  render() {
    return (
      <div>
        <Table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
            </tr>
            </thead>
            <tbody>
            { this.state.users && 
                this.state.users.map( user => (
                    <User user={user} />
                ))
            }
            </tbody>
      </Table>
      </div>
    )
  }
}
