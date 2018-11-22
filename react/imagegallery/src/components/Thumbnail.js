import React from 'react'

const Thumbnail = (props) => {
  return (
    <div className="thumbnail"><img src={props.url} /></div>
  )
}

export default Thumbnail;
