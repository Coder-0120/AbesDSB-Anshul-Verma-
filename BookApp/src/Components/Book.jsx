import React from 'react'
import './Book.css';
import { useState } from 'react';

const Book = (props) => {
    const[count,setcount]=useState(0);
    const increment=()=>{
        setcount(count+1);
    }
    const decrement=()=>{
        if(count>0){
            setcount(count-1);
        }
    }
  return (
    <div>

    <div id='book' style={{margin:"10px"}}>
        <img src={props.img} alt='' height={100} width={100} ></img>
        <h1>Title:{props.name}</h1>
        <h1>Price:{props.price}</h1>
        <button onClick={increment}>+</button>
        <button>{count}</button>
        <button onClick={decrement}>-</button>
    </div>
    </div>
  )
}

export default Book