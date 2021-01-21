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

                        {projectArr.map( e => (
                            <div className='project__container-card'>
                                <div className='project__container-cardInfo'>
                                    <h3>CoolCats</h3>
                                    <p>Conference Planner</p>
                                    <div className="project__img">
                                        <img src={""} alt="project_img" />
                                    </div>
                                    <ul className='project__container-features'>
                                        <p>Create and explore detailed conferences in a on stop conference hosting platform</p>
                                        <li>Full CRUD with MongoDB</li>
                                        <li>User Authentication</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>More Details</Button>
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

