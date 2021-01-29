import React from "react";
import { useSpring, animated } from 'react-spring'
import './App.css';
import { BrowserRouter as Switch, Route, HashRouter } from "react-router-dom"
import Home from "./components/pages/homepage/Home"
import Footer from "./components/Footer";


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
        <HashRouter basename="/">
            <animated.div className="App" style={fade}>
                    <Route path="/" exact component={Home} />
                <Footer />
            </animated.div>
        </HashRouter>
    );
}

export default App;
