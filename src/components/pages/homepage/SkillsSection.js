import React from 'react'
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import "./SkillsSection.css"

function SkillsSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    skillsImgs,
    buttonLabel,
    image,
    imgStart
}) {
    return (<>
        <div id="skills" className={lightBg ? 'skills__hero-section' : 'skills__hero-section darkBg'}>
            <div className='container'>
                <div className="skills_container">
                    <div className='top-line'>{topLine}</div>

                    <div className='skills__frontEnd'>
                        <h1 className={lightText ? 'skills__heading' : 'skills__heading dark'}>Front End</h1>
                        <div className="skills__icons">
                            <div className="skill_icon"><img src={skillsImgs.html} alt="html" /><p>HTML5</p></div>
                            <div className="skill_icon"><img src={skillsImgs.css} alt="css" /><p>CSS</p></div>
                            <div className="skill_icon"><img src={skillsImgs.js} alt="js" /><p>JavaScript</p></div>
                            <div className="skill_icon"><img src={skillsImgs.react} alt="React" /><p>React</p></div>
                            <div className="skill_icon"><img src={skillsImgs.jquerry} alt="jq" /><p>JQuerry</p></div>
                            <div className="skill_icon"><img src={skillsImgs.bootstrap} alt="bootstrap" /><p>BootStrap</p></div>
                            <div className="skill_icon"><img src={skillsImgs.materalize} alt="materalize" /><p>Materalize</p></div>
                        </div>
                    </div>
                    <div className='skills__backEnd'>
                        <h1 className={lightText ? 'skills__heading' : 'skills__heading dark'}>Back End</h1>
                        <div className="skills__icons">
                            <div className="skill_icon"><img src={skillsImgs.node} alt="Node" /><p>Node JS</p></div>
                            <div className="skill_icon"><img src={skillsImgs.express} alt="Express" /><p>Express</p></div>
                            <div className="skill_icon"><img src={skillsImgs.mongo} alt="MongoDB" /><p>MongoDB</p></div>
                            <div className="skill_icon"><img src={skillsImgs.firebase} alt="FireBase" /><p>Firebase</p></div>
                            <div className="skill_icon"><img src={skillsImgs.sql} alt="Sql" /><p>NoSql</p></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>);
}

export default SkillsSection;


