import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Book</div>
      <ul className="nav-links">
        <li><Link to="#home">Home</Link></li>
        <li><Link to="#about">About</Link></li>
        <li><Link to="#services">Services</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
