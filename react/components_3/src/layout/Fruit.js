import React from 'react'

const Fruit = (props) => {
  
  let thumbnail = {
      width: '150px',
      height: '130px',
      marginTop: '5px',
      marginRight: '5px',
      background: props.color,
      cursor: 'pointer',
      alignItems: 'center',
      boxShadow: '0 4px 8px 0 rgba(31, 31, 31, 0.2), 0 6px 20px 0 rgba(31, 31, 31, 0.19)'
  }
  
  let closeButton = {
      float: 'right'
  }

  return (
    <div style={thumbnail}>
      {props.type}
      <button style={closeButton} onClick={props.removeFruitHandler.bind(this, props.id)}>X</button>
    </div>
  )
}

export default Fruit;
