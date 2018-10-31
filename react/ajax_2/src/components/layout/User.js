import React from 'react'

const User = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td><button onClick={props.deleteUserHandler.bind(this, props.id)}>X</button></td>
    </tr>
  )
}

export default User;