import React from 'react'
import Header from './Header'
import AboutMe from "./AboutMe"
import SkillsSection from './SkillsSection'
import Projects from './Projects'
import {headerOjb, aboutMeObj, skillsObj, projectsObj, projectOne, projectTwo, projectThree} from './Data'
import Navbar from "./Navbar";
import Project from "../homepage/Project"

function Home() {
    return (
        <>
            <Navbar/>
            <Header {...headerOjb}/>
            <AboutMe {...aboutMeObj}/>
            <SkillsSection {...skillsObj }/>
            <Project {...projectOne}/>
            <Project {...projectTwo}/>
            <Project {...projectThree}/>
            <Projects {...projectsObj}/>
        </>
    )
}

export default Home
