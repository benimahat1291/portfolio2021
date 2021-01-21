export const headerOjb = {
    lightBg: false,
    lightText: true,
    topLine: "Full Stacks Web Developer",
    headline: "BENI MAHAT",
    buttonLabel: "Resume",
    imgStart: 'start',
    image: 'images/mypic.jpg',
    alt: 'mypic',
}

export const aboutMeObj = {
    lightBg: true,
    lightTextDesc: false,
    topLine: "About Me",
    description: "Full Stack Web Developer passionate about creating an ideal user experience with React. Aspiring to master all React libraries and technologies, I stay innovative by challenging myself to implement new technologies in every project. Recently received a Certificate in Web Development from Denver University. Excellent interpersonal communicator and a proactive collaborator valued on team-based projects and resourceful individually. Deadline driven, I establish measurable goals and resiliently work to achieve them. Currently I am seeking an environment where I can professionally utilize and grow my skills as a developer.   ",
}

export const skillsObj = {
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "Skills",
    headline: "Front End",
    description: "Full Stack Web Developer passionate about creating an ideal user experience with React. Aspiring to master all React libraries and technologies, I stay innovative by challenging myself to implement new technologies in every project. Recently received a Certificate in Web Development from Denver University. Excellent interpersonal communicator and a proactive collaborator valued on team-based projects and resourceful individually. Deadline driven, I establish measurable goals and resiliently work to achieve them. Currently I am seeking an environment where I can professionally utilize and grow my skills as a developer.   ",
    buttonLabel: "Resume",
    imgStart: '',
    skillsImgs:
    {
        html: "images/html_icon.png",
        css: "images/css_icon.png",
        js: "images/js_icon.png",
        bootstrap: "images/bootstrap_icon.png",
        materalize: "images/materalize_icon.png",
        react: "images/react_icon.png",
        jquerry: "images/jq_icon.png",
        node: "images/node_icon.png",
        express: "images/express_icon.png",
        sql: "images/sql_icon.png",
        mongo: "images/mongodb_icon.png",
        firebase: "images/firebase_icon.png"
    },
    alt: 'mypic',
}

export const projectsObj = {

    projectsArr: [
        {
            name: "CoolCats",
            subtitle: "Conference Planner",
            message: "A full MERN Application where Users can create and register for events and confrences. This Web Application has a login authentication and shows full CRUD functionatily.",
            img: "images/coolcats.png",
            githubUrl: "https://github.com/benimahat1291/ConferencePlanner",
            deployedUrl: "https://conference-planner-123432.herokuapp.com/",
            flex: "start"
        },
        {
            name: "BookShelf",
            message: "BookShelf is a MVC web page application that uses node express and sequalize.This application allows uses to make an accout and search and borrow books from other users that have an accout on the page.",
            img: "images/bookshelflogo.png",
            githubUrl: "https://github.com/benimahat1291/BookShelf-Public-Library-Online-Rental-System-Javascript-Express-MySQL-Sequelize.git",
            deployedUrl: "https://intense-earth-81966.herokuapp.com/",
            flex: "end"
        },
        {
            name: "Meal Matchers",
            message: "MealMatchers a website application that uses Jquerry to search an Api for recipies when the user provides an ingredient. User can then save the recipi to their database",
            img: "images/meal_matcher.png",
            githubUrl: "https://github.com/benimahat1291/project_1-----MealMatcher.git",
            deployedUrl: "https://jessicaano92.github.io/meal_matcher_javascript_ajax/",
            flex: "start"
        }
    ]
}