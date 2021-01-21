import React from 'react'
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import "./Header.css"

function AboutMe({
    lightBg,
    topLine,
    lightTextDesc,
    description,
 
}) {
    return (<>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div className='container'>
                <div className="about-me">
                    <div className='top-line'>{topLine}</div>
                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'} >{description}</p>
                </div>
            </div>
        </div>
    </>);
}

export default AboutMe;