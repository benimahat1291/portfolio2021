import React from 'react'
import "./AboutMe.css"

function AboutMe({
    lightBg,
    topLine,
    lightTextDesc,
    description,

}) {
    return (<>
        <div className={lightBg ? 'aboutMe__hero-section' : 'aboutMe__hero-section darkBg'} id="about-Me">
            <div className='container'>
                <div className='top-line'>{topLine}</div>
                <p className={lightTextDesc ? 'aboutMe__hero-subtitle' : 'aboutMe__hero-subtitle dark'} >{description}</p>
            </div>
        </div>
    </>);
}

export default AboutMe;