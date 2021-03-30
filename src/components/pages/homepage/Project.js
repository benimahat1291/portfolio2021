import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai'
import { IoIosGlobe } from "react-icons/io"
import LaptopImg from "../../../images/laptop.png"

function Project({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    highlights,
    technology,
    projectImg,
    alt,
    imgStart,
    githubUrl,
    deployedUrl,
    title,

}) {
    return (
        <>
            <div
                className={lightBg ? 'project__hero-section' : 'project__hero-section darkBg'}
            >
                <div data-aos="fade-up" data-aos-delay="200" className='container'>
                    <div id="projects" className={title === 'true' ? 'project__title' : 'project__title-none'}>
                        <h1 className='project__heading-1'>projects</h1>
                    </div>
                    <div
                        className='project__hero-row'
                        style={{
                            display: 'flex',
                            flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                        }}
                    >
                        <div className='project__info'>
                            <div className='project__hero-text-wrapper'>
                                <div className="projectpage__title">

                                    <div className="project__title-txt">
                                        <div>
                                            <h1 className={lightText ? 'project__heading' : 'project__heading dark'}>
                                                {headline}
                                            </h1>
                                            <div className='project__top-line'>{topLine}</div>
                                        </div>
                                    </div>
                                    <div className="projectpage__icons">
                                        <a href={deployedUrl} rel="noopener noreferrer" target="_blank">

                                            <IoIosGlobe className="projectpage__icon" />

                                        </a>
                                        <a  href={githubUrl} rel="noopener noreferrer" target="_blank">
                                            <AiFillGithub className="projectpage__icon" />
                                        </a>
                                    </div>
                                </div>
                                <p
                                    className={
                                        lightTextDesc
                                            ? 'home__hero-subtitle'
                                            : 'home__hero-subtitle dark'
                                    }
                                >
                                    {description}
                                </p>

                                <div className="project__cs-info">
                                    <div className="home__hero-subtitle project_highlights">
                                    <p>{highlights}</p>
                                    </div>
                                </div>

                                    <div className="home__hero-subtitle project__tech">
                                        <p>{technology}</p>
                                    </div>


                            </div>
                        </div>

                        <div className='home__hero-img-wrapper'>
                            <img src={LaptopImg} alt={alt} className='home__laptop-img' />
                            <img src={process.env.PUBLIC_URL + "/" + projectImg} alt={alt} className='home__project-img' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;