import React from 'react'
import Header from './Header'
import AboutMe from "./AboutMe"
import SkillsSection from './SkillsSection'
import Project from '../../Projects'
import {headerOjb, homeObjTwo, aboutMeObj} from './Data'

function Home() {
    return (
        <>
            <Header {...headerOjb}/>
            <AboutMe {...aboutMeObj}/>
            <SkillsSection {...homeObjTwo }/>
            {/* <Project/> */}
        </>
    )
}

export default Home
