import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Abaut from "./components/Abaut/Abaut";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

export default function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <Abaut />
            <Portfolio />
            <Experience />
            <Contact />
            <SocialLinks />
        </div>
    )
}