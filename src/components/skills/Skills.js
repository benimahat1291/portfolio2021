import React from 'react'
import './Skills.css'
import HtmlIcon from "../../img/html_icon.png"
import CssIcon from "../../img/css_icon.png"
import JsIcon from "../../img/js_icon.png"
import BootstrapIcon from "../../img/bootstrap_icon.png"
import MateralizeIcon from "../../img/materalize_icon.png"
import ReactIcon from "../../img/react_icon.png"
import JqIcon from "../../img/jq_icon.png"
import NodeIcon from "../../img/node_icon.png"
import ExpressIcon from "../../img/express_icon.png"
import SqlIcon from "../../img/sql_icon.png";
import MongoIcon from "../../img/mongodb_icon.png"
import FirebaseIcon from "../../img/firebase_icon.png"

function Skills() {
    return (
        <section className="skills_section">
            <div className="skills">
                <h1 className="skills__title">Skills</h1>
                <div className="skills__container">
                    <div className="skills__frontEnd">
                        <div className="skills__title2"><h2>Front End</h2></div>
                        <div className="skills__icons">
                            <div className="skill_icon"><img src={HtmlIcon} alt="html" /><p>HTML5</p></div>
                            <div className="skill_icon"><img src={CssIcon} alt="css" /><p>CSS</p></div>
                            <div className="skill_icon"><img src={JsIcon} alt="js" /><p>JavaScript</p></div>
                            <div className="skill_icon"><img src={ReactIcon} alt="React" /><p>React</p></div>
                            <div className="skill_icon"><img src={JqIcon} alt="jq" /><p>JQuerry</p></div>
                            <div className="skill_icon"><img src={BootstrapIcon} alt="bootstrap" /><p>BootStrap</p></div>
                            <div className="skill_icon"><img src={MateralizeIcon} alt="js" /><p>Materalize</p></div>
                        </div>
                    </div>
                    <div className="skills__backEnd">
                        <div className="skills__title2"><h2>Back End</h2></div>
                        <div className="skills__icons">
                            <div className="skill_icon"><img src={NodeIcon} alt="Node" /><p>Node JS</p></div>
                            <div className="skill_icon"><img src={ExpressIcon} alt="Express" /><p>Express</p></div>
                            <div className="skill_icon"><img src={MongoIcon} alt="MongoDB" /><p>MongoDB/Mongoose</p></div>
                            <div className="skill_icon"><img src={FirebaseIcon} alt="FireBase" /><p>Firebase</p></div>
                            <div className="skill_icon"><img src={SqlIcon} alt="Sql" /><p>NoSql</p></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills
