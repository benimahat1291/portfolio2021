import React from 'react';
import './Footer.css';
import {
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';
import { SiGmail } from "react-icons/si"

function Footer() {
    return (
        <div id="contact" className='footer-container'>
            <section className='footer-contact'>
                <p className='footer-contact-heading'>
                    Thank you for visiting <span> contact me </span> through E-mail or the links below
        </p>


                <div className='social-icons'>
                    <a
                        className='social-icon-link'
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/mahatbeni/">
                        <FaFacebook />
                    </a>
                    <a
                        className='social-icon-link'
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/beni_on_the_jetz/?hl=en">
                        <FaInstagram />
                    </a>
                    <a
                        className='social-icon-link'
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/benimahat1291">
                        <FaGithub />
                    </a>
                    <a
                        className='social-icon-link'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                    >
                        <FaTwitter />
                    </a>
                    <a
                        className='social-icon-link'
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/beni-mahat-1218b5184/">
                        <FaLinkedin />
                    </a>

                </div>


                <div className="email__links">
                    <a
                        className='email__icon'
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://mail.google.com/">
                        <span><SiGmail /></span>
                    </a>
                    <a
                        className='email__address'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                    >
                        <p>benimahat6565@gmail.com </p>
                    </a>

                </div>

            </section>
            <div className='footer-logo'>
                <a to='/' className='social-logo'>
                    <div className="footer-item">
                        <p>Full Stacks Developer</p>
                    </div>
                    <div className="footer-item">
                        <span>BENI</span>
                        <MdFingerprint className='navbar-icon' />
                        <span>MAHAT</span>
                    </div>
                    <div className="footer-item">
                        <span>2021 Portfolio</span>
                    </div>
                </a>
            </div>

        </div>
    );
}

export default Footer;