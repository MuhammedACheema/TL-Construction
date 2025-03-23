import React from "react";
import "./styling/Contact.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";



function Contact() {
    return (
        <div>
            <div className="screen">
                <div className="top">
                    <h2>Contact Us</h2>
                    <p>Have a question? We're happy to help!</p>
                </div>
                <div className="container">
                    <div className="phone"> 
                        <h3><FaPhoneAlt /> Phone</h3>
                        <a href="tel:+16465234179">Mobile: (646) 523-4179</a>
                        <p></p>
                        <a href="tel:+17188427083">Office: (718) 842-7083</a>
                    </div>
                    <div className="email"> 
                        <h3><FaEnvelope /> Email</h3>
                        <a href="mailto:tlcontractor25@gmail.com">tlcontractor25@gmail.com</a>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
