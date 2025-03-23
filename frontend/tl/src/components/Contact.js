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
                        <p>Mobile: (646) 523-4179</p>
                        <p>Office: (718) 842-7083</p>
                    </div>
                    <div className="email"> 
                        <h3><FaEnvelope /> Email</h3>
                        <p>cheema1150@yahoo.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
