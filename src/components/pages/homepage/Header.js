import React from 'react'
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import "./Header.css"

function Header({
    lightBg,
    topLine,
    lightText,
    headline,
    buttonLabel,
    image,
    alt,
    imgStart
}) {
    return (<>
        <div className={lightBg ? 'header__hero-section' : 'header__hero-section darkBg'}>
            <div className='container'>
                <div className='row header__hero-row' style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' :'row'}}>
                    <div className='header__hero-text-wrapper'>
                        <div className='top-line'>{topLine}</div>
                        <h1 className={lightText ? 'heading' : 'heading dark'}>
                            {headline}
                        </h1>

                        <Link to='/'>
                            <Button buttonSize='btn--wide' buttonColor='blue'>
                                {buttonLabel}
                            </Button>
                        </Link>
                    </div>

                    <div className='header__hero-img-wrapper'>
                        <img src={image} alt={alt} className='header__hero-img' />
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Header;