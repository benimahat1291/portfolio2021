import React from 'react'
import "./AboutMe.css"
import DuLogo from "../../images/denverLogo.jpeg"

function AboutMe() {
    return (
        <section className="aboutMe__section">
            <div className="aboutMe">
                <h1 className="aboutMe__title">About Me</h1>
                <div className="aboutMe__body">
                    <div className="aboutMe__bio"><p>I am Full-Stacks Developer living in Colorado.
                    Although I have not been coding for long, I am currently finishing a web-developement
                    course with Denver University that has effectively taught me a sizeable skillset of the
                    technologies deployed in the industry today. After I finish this course I am excited
                    to take my skills to the next level by developing more projects and entering the
                workplace.</p></div>
                    <div><img className="du__logo" src={DuLogo} alt="dulogo" /></div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
