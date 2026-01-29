import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">MyWebsite</div>
      <ul className="nav-links">
<<<<<<< HEAD
        <li><a href="#home">Home</a></li>
=======
        <li><Link to="/login">login</Link></li>
>>>>>>> 60fdbc7a4884d4c0a856ed6d61391f1339435741
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
