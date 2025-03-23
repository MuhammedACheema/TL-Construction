import React from "react";
import './styling/Projects.css';

function Projects({ image1, image2, description }) {
    return (
        <div className="project-container">
            <div className="images-row">
                <img src={image1} alt="Before" />
                <img src={image2} alt="After" />
            </div>
            <p className="description">{description}</p>
        </div>
    );
}

export default Projects;
