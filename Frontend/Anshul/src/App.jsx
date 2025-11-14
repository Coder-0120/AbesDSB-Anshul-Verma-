import React, { useEffect, useState } from 'react'
import Fashion from './Components/Fashion'

const App = () => {
  const[books,setBooks]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>{
      setBooks(data);
    })
  },[])
  return (
    <div style={{display:'flex',flexDirection:'row',gap:'2px',flexWrap:'wrap'}}>
      {
        books.map((b,i)=>(
          <Fashion key={i}  props={b}/>
        ))

      }
    </div>
  )
}

export default App