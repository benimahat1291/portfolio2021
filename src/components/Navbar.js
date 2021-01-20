import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { MdFingerprint } from "react-icons/md"
import { FaBars, FaTimes } from "react-icons/fa"
import { Button } from './Button'
import { IconContext } from 'react-icons/lib'

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
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <MdFingerprint className="navbar-icon" />
                    BENI MAHAT
                </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links"  onClick={closeMobileMenu}>
                                    About Me
                       </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/skills" className="nav-links"  onClick={closeMobileMenu}>
                                    Skills
                       </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-links"  onClick={closeMobileMenu}>
                                    Projects
                       </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-links"  onClick={closeMobileMenu}>
                                    Contact
                       </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to="/sign-up" className="btn-link">
                                        <Button buttonStyle="btn--outline">Resume</Button>
                                    </Link>
                                ) : (
                                        <Link to="/sign-up" className="btn-link"  onClick={closeMobileMenu}>
                                            <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                                                Resume
                                        </Button>
                                        </Link>
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
