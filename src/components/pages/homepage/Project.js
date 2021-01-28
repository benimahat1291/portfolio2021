import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai'
import { IoIosGlobe } from "react-icons/io"
import { Button } from '../../Button'


function Project({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    laptopImg,
    projectImg,
    alt,
    imgStart,
    title

}) {
    return (
        <>
            <div
                className={lightBg ? 'project__hero-section' : 'project__hero-section darkBg'}
            >
                <div className='container'>
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
                                <div className="project__title">

                                    <div className="project__title-txt">
                                        <div>
                                            <h1 className={lightText ? 'heading' : 'heading dark'}>
                                                {headline}
                                            </h1>
                                            <div className='top-line'>{topLine}</div>
                                        </div>
                                    </div>
                                    <div className="project__icons">
                                        <Link to='/sign-up'>

                                            <IoIosGlobe className="projectpage__icon" />

                                        </Link>
                                        <Link  to='/sign-up'>
                                            <AiFillGithub className="projectpage__icon" />
                                        </Link>
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
                                    <p>Full CRUD functionality, Scalable back-end with MongoDB,  Auth.O user Authentication</p>
                                    </div>
                                </div>

                                    <div className="home__hero-subtitle project__tech">
                                        <p>HTML, JSX, CSS, JSON, Express, React, Axios, MongoDB, Auth.0, and Server-side APIs</p>
                                    </div>


                            </div>
                        </div>

                        <div className='home__hero-img-wrapper'>
                            <img src={laptopImg} alt={alt} className='home__laptop-img' />
                            <img src={projectImg} alt={alt} className='home__project-img' />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;