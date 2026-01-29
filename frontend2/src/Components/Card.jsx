import React from 'react'
const Card = ({props}) => {
  return (
      // <div id='card-cont'>
    <div id='card' style={{border:"2px solid red"}}>
        <h1>{props.id}</h1>
        <h1>{props.name}</h1>
        <h1>{props.class}</h1>
      </div>
    // </div>
  )
}

export default Card