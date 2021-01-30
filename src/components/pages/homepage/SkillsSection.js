import React from 'react'
import "./SkillsSection.css"
import Html from "../../../images/html_icon.png"
import Css from "../../../images/css_icon.png"// css: "",
import Js from "../../../images/js_icon.png"// js: "images/",
import Bootstrap from "../../../images/bootstrap_icon.png"// bootstrap: "images/bootstrap_icon.png",
import Materalize from "../../../images/materalize_icon.png"// materalize: "",
import Reactapp from "../../../images/react_icon.png"// react: "",
import Jquerry from "../../../images/jq_icon.png"// jquerry: "",
import Nodejs from "../../../images/node_icon.png"// node: "",
import Express from "../../../images/express_icon.png"// express: "images/",
import Sql from "../../../images/sql_icon.png"// sql: "images/",
import Mongo from "../../../images/mongodb_icon.png"// mongo: "",
import Firebase from "../../../images/firebase_icon.png"// firebase: ""

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
                <div data-aos="fade-up" className="skills_container">
                    <div className='top-line'>{topLine}</div>

                    <div className='skills__frontEnd'>
                        <h1 className={lightText ? 'skills__heading' : 'skills__heading dark'}>Front End</h1>
                        <div className="skills__icons">
                            <div data-aos="flip-left"  data-aos-offset="200"  className="skill_icon"><img src={Html} alt="html" /><p>HTML5</p></div>
                            <div data-aos="flip-left"  data-aos-offset="200"   className="skill_icon"><img src={Css} alt="css" /><p>CSS</p></div>
                            <div data-aos="flip-left"  data-aos-offset="200"   className="skill_icon"><img src={Js} alt="js" /><p>JavaScript</p></div>
                            <div data-aos="flip-left"  data-aos-offset="200"   className="skill_icon"><img src={Reactapp} alt="React" /><p>React</p></div>
                            <div data-aos="flip-left"  data-aos-offset="200"   className="skill_icon"><img src={Jquerry} alt="jq" /><p>JQuerry</p></div>
                            <div data-aos="flip-left"  data-aos-offset="200"   className="skill_icon"><img src={Bootstrap} alt="bootstrap" /><p>BootStrap</p></div>
                            <div data-aos="flip-left"  data-aos-offset="200"   className="skill_icon"><img src={Materalize} alt="materalize" /><p>Materalize</p></div>
                        </div>
                    </div>
                    <div className='skills__backEnd'>
                        <h1 className={lightText ? 'skills__heading' : 'skills__heading dark'}>Back End</h1>
                        <div className="skills__icons">
                            <div data-aos="flip-right"  data-aos-offset="200"   className="skill_icon"><img src={Nodejs} alt="Node" /><p>Node JS</p></div>
                            <div data-aos="flip-right"  data-aos-offset="200"   className="skill_icon"><img src={Express} alt="Express" /><p>Express</p></div>
                            <div data-aos="flip-right"  data-aos-offset="200"   className="skill_icon"><img src={Mongo} alt="MongoDB" /><p>MongoDB</p></div>
                            <div data-aos="flip-right"  data-aos-offset="200"   className="skill_icon"><img src={Firebase} alt="FireBase" /><p>Firebase</p></div>
                            <div data-aos="flip-right"  data-aos-offset="200"   className="skill_icon"><img src={Sql} alt="Sql" /><p>NoSql</p></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>);
}

export default SkillsSection;


