import React from 'react'
import { Link } from 'react-router-dom';

const Thumbnail = (props) => {
  return (
    <Link to={'/gallery/' + props.id}><div className="thumbnail"><img src={props.url} /></div></Link>
  )
}

export default Thumbnail;
