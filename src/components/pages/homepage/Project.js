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
                  <div className="projectpage__title">
                  <div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                  </div>
                  
                  </div>
                <div className='top-line'>{topLine}</div>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
              <div className="project__icons">
                <Link  to='/sign-up'>
               
                 <IoIosGlobe  className="projectpage__icon"/>        
              
                </Link>
                <Link className="projectpage__icon" to='/sign-up'>
                 <AiFillGithub/>
                </Link>
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