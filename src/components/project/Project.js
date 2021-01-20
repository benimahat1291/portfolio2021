import React from 'react'
import "./Project.css"
import WebIcon from "../../img/webpage_icon.png"
import GithubIcon from "../../img/git_icon.png"
import MealMatchersPic from "../../img/meal_matcher.png"
import BookShelfPic from "../../img/bookshelflogo.png"
import CoolCatsPic from "../../img/coolcats.png"

function Project() {


    const projectArr = [
        {
            name: "CoolCats",
            subtitle: "Conference Planner",
            message: "A full MERN Application where Users can create and register for events and confrences. This Web Application has a login authentication and shows full CRUD functionatily.",
            img: CoolCatsPic,
            githubUrl: "https://github.com/benimahat1291/ConferencePlanner",
            deployedUrl: "https://conference-planner-123432.herokuapp.com/",
            flex: "start"
        },
        {
            name: "BookShelf",
            message: "BookShelf is a MVC web page application that uses node express and sequalize.This application allows uses to make an accout and search and borrow books from other users that have an accout on the page.",
            img: BookShelfPic,
            githubUrl: "https://github.com/benimahat1291/BookShelf-Public-Library-Online-Rental-System-Javascript-Express-MySQL-Sequelize.git",
            deployedUrl: "https://intense-earth-81966.herokuapp.com/",
            flex: "end"
        },
        {
            name: "Meal Matchers",
            message: "MealMatchers a website application that uses Jquerry to search an Api for recipies when the user provides an ingredient. User can then save the recipi to their database",
            img: MealMatchersPic,
            githubUrl: "https://github.com/benimahat1291/project_1-----MealMatcher.git",
            deployedUrl: "https://jessicaano92.github.io/meal_matcher_javascript_ajax/",
            flex: "start"
        },
    ]




    return (
        <>
            {projectArr.map(e => (
                <div className="project">
                    <div>
                        <div className="project__img"><img src={e.img} alt="Meal Matchers"></img></div>
                    </div>
                    <div className="project__info">
                        <div className="project__title">
                            <h1>{e.name}<span>{e.subtitle}</span></h1>
                           
                            <div className="project_discription"><p>{e.message}</p></div>
                        </div>
                        <div className="project__links">
                            <div><a href={e.githubUrl} target="_blank" rel="noreferrer"><img className="project__link" src={GithubIcon} alt="github"></img></a></div>
                            <div><a href={e.deployedUrl} target="blank" rel="noreferrer"><img className="project__link" src={WebIcon} alt="Deployed Website" href={e.deployedUrl}></img></a></div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Project
