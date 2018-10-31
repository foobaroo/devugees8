import React, { Component } from 'react';
import axios from 'axios';

export default class UserDetails extends Component {

    state = {
        user: null
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id)
            console.log(response);
            
            this.setState({
                user: response.data
            })
        }
        catch(error) {
            console.log( error );
        }
    }  

  render() {
    return (
      <div>
        User Details -> {this.props.match.params.id}
        <table>
            <tr>
                <td>Name: </td><td>{this.state.user && this.state.user.name}</td>
            </tr>   
            <tr>
                <td>Username: </td><td>{this.state.user && this.state.user.username}</td>
            </tr>                 
            <tr>
                <td>Email: </td><td>{this.state.user && this.state.user.email}</td>
            </tr>    
            <tr>
                <td>Phone: </td><td>{this.state.user && this.state.user.phone}</td>
            </tr>
            <tr>
                <td>Website: </td><td>{this.state.user && this.state.user.website}</td>
            </tr>                                    
        </table>
      </div>
    )
  }
}
