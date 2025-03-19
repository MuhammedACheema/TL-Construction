import React from "react";

function Projects({images, description}){
    return(
        <div>
            <img src={images} alt="//"/>
            <p>{description}</p>
       </div>
    );
}

export default Projects;