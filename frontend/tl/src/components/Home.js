import React from "react";
import home from "../images/home.jpg";
import home2 from "../images/home2.jpg";
import "./styling/Home.css";
import { useHistory } from 'react-router-dom';

function Home() {

  const navigate = useHistory();
  const handleClick = () => {
    navigate.push('/project');
  };

  const handleClick2 = () => {
    navigate.push('/aboutus')
  }

  return (
    <main className="container">
        <div className="imageRow">
            <img src={home} alt="Roof work" />
            <img src={home2} alt="Plastering wall" />
          </div>

          <div className="contentSection">
            <div className="perks">
              <h2>Free Estimates</h2>
              <h2>Fully Insured</h2>
              <h2>High-Quality Craftsmanship</h2>
            </div>

            <div className="servicesSection">
              <h2>SERVICES PROVIDED</h2>
              <p>
                SIDING - PAINTING - EXTERIOR & INTERIOR REMODELING - STEAM CLEANING -
                BRICK POINTING - SHEETROCK - ROOFING - WINDOWS - CEMENT & BRICK WORK -
                TILES
              </p>
            </div>

            <div className="buttonGroup">
              <button className="primaryButton" onClick={handleClick}>
                PREVIOUS PROJECTS
              </button>
              <button className="secondaryButton" onClick={handleClick2}>
                ABOUT US
              </button>
            </div>
          </div>
      </main>

  );
}

export default Home;
