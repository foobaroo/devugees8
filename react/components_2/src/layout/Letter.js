import React from 'react'

const Letter = (props) => {
  return (
    <div>
      {props.type} <button onClick={props.removeLetterHandler.bind(this, props.id)}>X</button>
    </div>
  )
}

export default Letter;