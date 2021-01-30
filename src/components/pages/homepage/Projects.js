import React from 'react';
import './Projects.css';
import {AiFillGithub} from 'react-icons/ai'
import { IoIosGlobe } from "react-icons/io"


function project(projectsObj) {
    const projectArr = projectsObj.projectsArr
    console.log(projectArr)
    return (
        <div className="project__bg">
            <div  className='container'>
                <div className='project__section'>
                    <div className="project__title">
                        <h1 className='project__heading-1'>Mini-projects</h1>
                        
                       


                    </div>
                    <div className='project__container'>

                        {projectArr.map(e => (
                            <div className='project__container-card'>
                                <div className='project__container-cardInfo'>
                                    <div className="project__img">
                                        <img src={process.env.PUBLIC_URL + "/" + e.img} alt="project_img" />

                                    </div>
                                    <div className="project__cardHeader">
                                        <div>
                                            <h3 className="project__name">{e.name}</h3>
                                            <p>{e.subtitle}</p>
                                        </div>

                                        <div className="project__links">
                                            <div className="project__icons">
                                            <a className="project__icon" rel="noopener noreferrer" target="_blank" href={e.githubUrl}> <h2><AiFillGithub /></h2></a>
                                            <a className="project__icon"rel="noopener noreferrer" target="_blank" href={e.deployedUrl}> <h2><IoIosGlobe /></h2></a>
                                            </div>

                                        </div>

                                    </div>
                                    <ul className='project__container-features'>
                                        <div className="project__container-features_highlights">
                                            <li>{e.hightlight_one}</li>
                                            <li>{e.hightlight_two}</li>
                                            <li>{e.hightlight_three}</li>
                                        </div>
                                
                                    </ul>
                                </div>
                            </div>
                        ))}

                    </div>
                    

                </div>
            </div>
        </div>
    );
}
export default project;

