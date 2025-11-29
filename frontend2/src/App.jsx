import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Card from './Components/Card';

const App = () => {
  const[students,setStudents]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/about')
    .then(res=>res.json())
    .then(data=>{
      setStudents(data);
    })
  },[])
  console.log(students)

  return (
    <div style={{display:'flex',flexDirection:'row',gap:'2px',flexWrap:'wrap'}}>
    {students.map((b, i) => (
  <Card key={i} props={b}/>
))}


    </div>
  )
}

export default App