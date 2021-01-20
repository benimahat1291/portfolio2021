import React from 'react'
import HeroSection from '../../HeroSection'
import Project from '../../Projects'
import {homeObjOne, homeObjTwo} from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjTwo }/>
            <Project/>
        </>
    )
}

export default Home
