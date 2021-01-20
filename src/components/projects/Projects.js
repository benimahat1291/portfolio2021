import React from 'react'
import "./Projects.css"
import Project from "../project/Project"

function Projects() {
    return (
        <section className="projects__section">
                <h1 className="projects__title">Projects</h1>
            <div className="projects">
                <div className="projects__container">
                    <Project />
                </div>
            </div>
        </section>

    )
}

export default Projects;
