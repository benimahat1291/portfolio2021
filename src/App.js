import React, {useEffect} from "react";
import { useSpring, animated } from 'react-spring'
import Aos from "aos";
import "aos/dist/aos.css"
import './App.css';
import { BrowserRouter as Switch, Route, HashRouter } from "react-router-dom"
import Home from "./components/pages/homepage/Home"
import Footer from "./components/Footer";


function App() {

    useEffect(()=> {
        Aos.init({duration: 3000});
    }, [])


    const fade = useSpring({
        from: {
            opacity: 0.3,

        },
        to: {
            opacity: 1,
            color: "#1c2237",
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
