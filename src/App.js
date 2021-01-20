import React from "react";
import { useSpring, animated } from 'react-spring'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/pages/homepage/Home"
import Footer from "./components/pages/footer/Footer";


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
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
                <Footer />
            </animated.div>
        </Router>
    );
}

export default App;
