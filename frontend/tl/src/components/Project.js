import React from "react";
import Projects from "./Projects";
import data from "./data/data"

const Project = () =>{
    const countries = data.map((x) =>

        <Projects image1={x.img1} image2 = {x.img2} description={x.description}/>
      )
    return(
        <div>
            {countries}
        </div>
    )
}

export default Project;