import React from 'react'
import Book from './Components/Book'
import Navbar from './Components/Navbar'
import "./App.css"
import RegisterPage from './Components/RegisterPage'
const App = () => {
  return (
    <>
      {/* <Navbar/> */}
      <RegisterPage/>
      
    <div>

        <h1 style={{textAlign:"center"}} >All Books</h1>

    <div style={{display:"flex",flexDirection:"row",gap:"10px",textAlign:'center',flexWrap:"wrap"}} >
      <Book name='Maths' price='500' img='https://tse4.mm.bing.net/th/id/OIP.aNm1aoymx1IjRc3_3nuGowHaL3?pid=Api&P=0&h=180'/>
      <br></br>
      <Book name='Physics' price='600' img='https://tse1.mm.bing.net/th/id/OIP.1dKIq7hGX2TNXpONvykkMQHaIz?pid=Api&P=0&h=180'/>
      <br></br>
      <Book name='Chemistry' price='400' img='https://tse1.mm.bing.net/th/id/OIP.5cRLXmZbUJ_7m9H6Vn-4gwHaJZ?pid=Api&P=0&h=180'/>
    </div>
    </div>
    </>
  )
}

export default App