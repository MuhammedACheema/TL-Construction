import React from 'react';
import "./styling/Nav.css";
import logo from '../images/logo.png';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="Header">
            <div className="logo-section">
                <Link to="/">
                    <img className="logo" src={logo} alt="Company Logo" />
                </Link>
            </div>

            <Link to="/aboutus">
                <h1>TL General Construction</h1>
            </Link>
            <ul className="links">
                <Link to="/contact">Contact Us</Link>
            </ul>
        </nav>
    );
}

export default Nav;
