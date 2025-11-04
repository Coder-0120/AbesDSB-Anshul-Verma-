import React from 'react'
import "./Card.css";
// import "../App.css";
const Card = (props) => {
  return (
      // <div id='card-cont'>
    <div id='card'>
        <img src='https://tse3.mm.bing.net/th/id/OIP.oqE4jugbeEXXJMTOgsDLogHaEI?pid=Api&P=0&h=180' height={100} width={100}></img>
        <h1>{props.name}</h1>
        <h1>{props.edu}</h1>
      </div>
    // </div>
  )
}

export default Card