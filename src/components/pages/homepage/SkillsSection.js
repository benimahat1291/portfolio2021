import React from 'react'
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import "./SkillsSection.css"

function SkillsSection({
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
        <div
            className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
        >
            <div className='container'>
                <div className='top-line' style={{width: "80%", margin: "auto"}}>{topLine}</div>
                <div
                    className='row home__hero-row'
                    style={{
                        display: 'flex',
                        flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
                    }}
                >
                        <div className='home__hero-text-wrapper'>
                    <div className='col'>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>
                                {headline}
                            </h1>
                            <p
                                className={
                                    lightTextDesc
                                        ? 'home__hero-subtitle'
                                        : 'home__hero-subtitle dark'
                                }
                            >
                                {description}
                            </p>
                        </div>
                    </div>

                    <div className='home__hero-text-wrapper'>
                        <div className='col'>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>
                                {headline}
                            </h1>
                            <p
                                className={
                                    lightTextDesc
                                        ? 'home__hero-subtitle'
                                        : 'home__hero-subtitle dark'
                                }
                            >
                                {description}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>);
}

export default SkillsSection;