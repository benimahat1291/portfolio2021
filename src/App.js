import React from "react";
import { useSpring, animated } from 'react-spring'
import './App.css';
import { BrowserRouter as Switch, Route, HashRouter } from "react-router-dom"
import Home from "./components/pages/homepage/Home"
import Footer from "./components/Footer";
import Projects from "./components/pages/projectpage/Projects";


function App() {
    const fade = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })


    return (
        <HashRouter>
            <animated.div className="App" style={fade}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/projects" exact component={Projects}/>
                </Switch>
                <Footer />
            </animated.div>
        </HashRouter>
    );
}

export default App;
