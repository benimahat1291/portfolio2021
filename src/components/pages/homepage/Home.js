import React from 'react'
import Header from './Header'
import AboutMe from "./AboutMe"
import SkillsSection from './SkillsSection'
import Project from './Projects'
import {headerOjb, aboutMeObj, skillsObj, projectsObj} from './Data'
import Navbar from "./Navbar";

function Home() {
    return (
        <>
            <Navbar/>
            <Header {...headerOjb}/>
            <AboutMe {...aboutMeObj}/>
            <SkillsSection {...skillsObj }/>
            <Project {...projectsObj}/>
        </>
    )
}

export default Home
