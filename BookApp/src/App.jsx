import React from 'react'
import Book from './Components/Book'
import Navbar from './Components/Navbar'
import "./App.css"
import RegisterPage from './Components/RegisterPage';
import Login from './Components/LoginPage';
import BookCollections from './Components/BookCollections';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Navbar/>
      {/* <RegisterPage/> */}
      {/* <BookCollections/> */}
      {/* <Login/> */}
      <Routes>
        <Route path='/login' element={Login}/>
      </Routes>
      
      
   
    </>
  )
}

export default App