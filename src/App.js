import React from "react";
import { useSpring, animated} from 'react-spring'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/header/Header"
import AboutMe from "./components/aboutme/AboutMe"
import Navbar from "./components/Navbar";


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
      <Router>
    <animated.div className="App" style={fade}>
        <Navbar/>
        <Switch>
            <Route path="/" />
        </Switch>
        <Header/>
        <AboutMe/>
    </animated.div>
    </Router>
  );
}

export default App;
