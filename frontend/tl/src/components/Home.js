import React from "react";
import home from "../images/home.jpg";
import home2 from "../images/home2.jpg";
import "./styling/Home.css";

function Home() {
  return (
    <main className="container">
      <div className="imageSection">
        <img src={home} alt="Roof work" />
        <img src={home2} alt="Plastering wall" />
      </div>
            <div className="contentSection">
        <div className="perks">
            <h2>Free Estimates</h2>
            <h2>Fully Insured</h2>
            <h2>High-Quality Craftsmanship</h2>
        </div>
        <h2>What Our Customers Are Saying</h2>
        <div className="testimonials">
            <blockquote>"The team was professional and completed the work on time. Highly recommend!" - John D.</blockquote>
            <blockquote>"Excellent quality and customer service. Will hire them again!" - Sarah T.</blockquote>
        </div>
        <div className="servicesSection">
            <h2>SERVICES PROVIDED</h2>
            <p>
            SIDING - PAINTING - EXTERIOR & INTERIOR REMODELING - STEAM CLEANING - BRICK POINTING - SHEETROCK - ROOFING - WINDOWS - CEMENT & BRICK WORK - TILES
            </p>
        </div>
        <div className="buttonGroup">
            <button className="primaryButton">Look At Previous Projects</button>
            <button className="secondaryButton">Learn More About Us</button>
        </div>
        </div>

    </main>
  );
}

export default Home;
