import React from 'react'
import "./AboutMe.css"
import Mypic from "../../../images/mypic.jpg"

function AboutMe({
    lightBg,
    topLine,
    lightTextDesc,
    description,
    alt

}) {
    return (<>
        <div className={lightBg ? 'aboutMe__hero-section' : 'aboutMe__hero-section darkBg'} id="about-Me">
            <div className='container'>
                <div data-aos="fade-up" className="aboutMe">
                    <div className="aboutMe__text">
                        <div className='top-line'>{topLine}</div>
                        <p className={lightTextDesc ? 'aboutMe__hero-subtitle' : 'aboutMe__hero-subtitle dark'} >{description}</p>
                    </div>
                    <div className='header__img-wrapper'>
                        <img src={Mypic} alt={alt} className='header__img' />
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default AboutMe;