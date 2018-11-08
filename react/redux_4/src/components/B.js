import React, { Component } from 'react'
import { connect } from 'react-redux';

class B extends Component {
  render() {
    return (
      <div>
        x = {this.props.x} 
        {this.props.users && 
        this.props.users.map( (user) => (
            <div key={user.id}>{user.id}, {user.name}, {user.username}</div>
          )
        )}

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    x: state.x,
    users: state.users
});

export default connect(mapStateToProps, null)(B);