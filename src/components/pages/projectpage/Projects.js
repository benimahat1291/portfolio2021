import React from 'react'
import ProjectsNav from "./ProjectsNav"
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
// import Project from "../homepage/Project"

function Projects() {
    return (
        <>
        <ProjectsNav/>
        <div>
            {/* <Project {...homeObjOne}/>
            <Project {...homeObjTwo}/>
            <Project {...homeObjThree}/> */}
        </div>
        </>
    )
}

export default Projects
