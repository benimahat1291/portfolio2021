import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import {Link} from "react-scroll"
import { MdFingerprint } from "react-icons/md"
import { FaBars, FaTimes } from "react-icons/fa"
import { Button } from '../../Button'
import { IconContext } from 'react-icons/lib'
import Resume from "../../../images/BeniMahatResume.pdf"

function Navbar() {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 990) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>

                <div className="navbar">
                    <div className="navbar-container container">
                    <Link className="navbar-logo" activeClass="active" to="header" spy={true} smooth={true} offset={0} duration={500}  onClick={closeMobileMenu}>
                    <span>BENI</span>
                        <MdFingerprint className='navbar-icon' />
                        <span>MAHAT</span>
                    </Link>
                        
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link className="nav-links" activeClass="active" to="about-Me" spy={true} smooth={true} offset={-45} duration={500}  onClick={closeMobileMenu}>
                                    About Me
                       </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-links" activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500}  onClick={closeMobileMenu}>
                                    Skills
                       </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-links" activeClass="active" to="projects" spy={true} smooth={true} offset={-150} duration={500}  onClick={closeMobileMenu}>
                                    Projects
                       </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-links" activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500}  onClick={closeMobileMenu}>
                                    Contact
                       </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <a rel="noopener noreferrer" target="_blank" href={Resume} className="btn-link">
                                        <Button buttonStyle="btn--outline">Resume</Button>
                                    </a>
                                ) : (
                                        <a rel="noopener noreferrer" target="_blank" href={Resume} className="btn-link"  onClick={closeMobileMenu}>
                                            <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                                                Resume
                                        </Button>
                                        </a>
                                    )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>

        </>
    )
}

export default Navbar
