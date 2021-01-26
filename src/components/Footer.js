import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div id="contact" className='footer-container'>
      <section className='footer-contact'>
        <p className='footer-contact-heading'>
          Thank you for visiting <span> contact me </span> through the links below
        </p>

        <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>

          </div>
          
      </section>
      <div className='footer-logo'>
            <Link to='/' className='social-logo'>
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
            </Link>
          </div>

    </div>
  );
}

export default Footer;