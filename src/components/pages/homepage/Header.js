import React from 'react'
import { Button } from '../../Button';
import "./Header.css"
import VideoBg from "../../../images/video-1.mp4"
import {AiFillGithub, AiOutlineLinkedin} from "react-icons/ai"
import ResumeLink from "../../../images/Mahat_resume.pdf"

function Header({
    topLine,
    lightText,
    headline,
    imgStart
}) {
    return (<>
            <video src={VideoBg} autoPlay loop muted />
        <div className='header__hero-section' id="header">
            <div className='container'>


                <div className='header__hero-row' style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' :'row'}}>
                    <div className='header__hero-text-wrapper'>
                        <div className='header__top-line'>{topLine}</div>
                        <h1 className={lightText ? 'header__heading' : 'header__heading dark'}>
                            {headline}
                        </h1>
                        <div className="header__links">
                        <a rel="noopener noreferrer" target="_blank" href={ResumeLink}>
                        <Button className='btn-link' buttonColor='blue'>
                                Resume
                            </Button> </a>

                            <a  className="header__link"rel="noopener noreferrer" target="_blank" href="https://github.com/benimahat1291">
                            <h1 ><AiFillGithub/></h1> </a>

                            <a className="header__link" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/beni-mahat-1218b5184/">
                            <h1   ><AiOutlineLinkedin/></h1> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Header;