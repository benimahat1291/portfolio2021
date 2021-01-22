import React from 'react';
import { Button } from '../../Button';
import './Projects.css';

function project(projectsObj) {
    const projectArr = projectsObj.projectsArr
    console.log(projectArr)
    return (
        <div className="project__bg">
            <div className='container'>
                <div className='project__section'>
                    <h1 className='project__heading'>projects</h1>
                    <div className='project__container'>

                        {projectArr.map(e => (
                            <div className='project__container-card'>
                                <div className='project__container-cardInfo'>
                                    <div className="project__cardHeader">
                                        <div>
                                        <h3 className="project__name">{e.name}</h3>
                                        <p>{e.subtitle}</p>
                                        </div>
                                        
                                    </div>
                                    <div className="project__img">
                                        <img src={e.img} alt="project_img" />

                                    </div>
                                    <ul className='project__container-features'>
                                        <div className="project__container-features_desc">
                                            {/* <p>{e.message}</p> */}
                                        </div>
                                        <div className="project__container-features_highlights">
                                            <li>Full CRUD with MongoDB</li>
                                            <li>User Authentication</li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="projects__viewAll"> View All Projects</div>
                </div>
            </div>
        </div>
    );
}
export default project;

