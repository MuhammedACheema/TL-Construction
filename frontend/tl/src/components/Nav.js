import React from 'react';
import "./styling/Nav.css";
import logo from '../images/logo.jpg';

function Nav() {
    return (
        <nav className="Header">
            <div className="logo-section">
                <img className="logo" src={logo} alt="Company Logo" />
            </div>
            <h1>TL General Construction</h1>
            <ul className="links">
                <li>Home</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    );
}

export default Nav;
