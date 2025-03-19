import React from "react";
import Projects from "./Projects";
import data from "./data/data"

const Project = () =>{
    const countries = data.map((x) =>

        <Projects images={x.flag} description={x.funFact}/>
      )
    return(
        <div>
            {countries}
        </div>
    )
}

export default Project;