import React from 'react'
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import "./Header.css"

function HeroSection({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    image,
    alt,
    imgStart
}) {
    return (<>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div className='container'>
                <div
                    className='row home__hero-row'
                    style={{
                        display: 'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                    }}
                >
                    <div className='home__hero-text-wrapper'>
                        <div className='top-line'>{topLine}</div>
                        <h1 className={lightText ? 'heading' : 'heading dark'}>
                            {headline}
                        </h1>

                        <Link to='/sign-up'>
                            <Button buttonSize='btn--wide' buttonColor='blue'>
                                {buttonLabel}
                            </Button>
                        </Link>
                    </div>

                    <div className='home__hero-img-wrapper'>
                        <img src={image} alt={alt} className='home__hero-img' />
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default HeroSection;