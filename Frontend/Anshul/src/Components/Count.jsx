import React, { useState } from 'react'

const Count = () => {
    const[count,setcount]=useState(0);

    const increment=()=>{
        setcount(count+1);
    }
    const decrement=()=>{
        setcount(count-1);
    }
  return (
    <div style={{color:"red",backgroundColor:"black",width:"150px",height:"70px",display:"flex",justifyContent:"space-around",alignItems:"center",borderRadius:"10px",margin:"20px auto"}}>
        <button style={{width:"50px",height:"30px",fontWeight:"900"}} onClick={increment}>+</button>
        <span style={{fontWeight:"900",fontSize:"20px"}}>{count}</span>
        <button style={{width:"50px",height:"30px",fontWeight:"900"}} onClick={decrement}>-</button>
    </div>
  )
}

export default Count