import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'
import "./App.css"
import Count from './Components/Count'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Count/>

      {/* <Card name='Anshul' edu='10th'/>
      <br/>
      <Card name='Aman' edu='12th'/>
      <br/>
      <Card name='Ansh' edu='Btech'/> */}

    </div>
  )
}

export default App
