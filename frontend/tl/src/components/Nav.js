import React from 'react';
import "./styling/Nav.css";
import logo from '../images/logo.png';
import { Link } from "react-router-dom";



function Nav() {
  return (
    <nav className="Header">
      <div className="brand">
        <Link to="/" className="brand-link">
          <img className="logo" src={logo} alt="Company Logo" />
          <span className="brand-name">TL General Construction</span>
        </Link>
      </div>

      <div className="nav-actions">
      <Link to= "/aboutus" className="contact-button">
        About Us</Link>
        <Link to= "/project" className="contact-button">
        Projects</Link>
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
        
      </div>
    </nav>
  );
}

export default Nav;
