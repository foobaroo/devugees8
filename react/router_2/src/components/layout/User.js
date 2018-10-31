import React from 'react'
import { Link } from 'react-router-dom';

const User = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td><Link to={'/userdetails/' + props.id}>Show Details</Link></td>
    </tr>
  )
}

export default User;
