import React from "react";
import './background.scss'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Routes
} from "react-router-dom";
import Home from "../home/home";
import Gallery from "../gallery/gallery";
import About from "../about/about";
import Contact from "../contact/contact";
import { useState, useEffect } from "react";
import useViewport from "../viewport/viewport";
import background from "../images/gfp-astro-timelapse.mp4"


const Background = () => {
    const [isNav, setIsNav] = useState(false)
    const viewPort = useViewport();
    const isMobile = viewPort.width <= 768;

    const handleClickNav = () => {
        setIsNav(!isNav);
    }

    return (
        <Router>
            <div className="background">
                <video id="myVideo" autoPlay loop muted src={background}></video>
                <div className="header">
                    <h2 className="title">Astro Motion</h2>
                    {
                        isMobile === false ?
                            <ul>
                                <li>
                                    <NavLink to="/" activeClassName="active">Home
                                        <div></div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/gallery">Gallery
                                        <div></div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About
                                        <div></div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact
                                        <div></div>
                                    </NavLink>
                                </li>
                            </ul>
                            :
                            <div className="control-nav"
                                onClick={() => handleClickNav()}
                            >
                                <div className="navs">
                                    <span className="nav1"></span>
                                    <span className="nav2"></span>
                                    <span className="nav3"></span>
                                </div>
                                {
                                    isNav &&
                                    <ul>
                                        <li>
                                            <NavLink to="/" activeClassName="active">Home
                                                <div></div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/gallery">Gallery
                                                <div></div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/about">About
                                                <div></div>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact">Contact
                                                <div></div>
                                            </NavLink>
                                        </li>
                                    </ul>
                                }
                            </div>
                    }

                </div>
                <Routes>
                    <Route path="/" element={<Home />}>
                    </Route>
                    <Route path="/gallery" element={<Gallery />}>
                    </Route>
                    <Route path="/about" element={<About />}>
                    </Route>
                    <Route path="/contact" element={<Contact />}>
                    </Route>
                </Routes>
                <div className="footer">
                    <h3 className="footer-left">Copyright 2021 Astro Motion Company Limited. All rights reserved.</h3>
                    <h3 className="footer-right">Designed by TemplateMo</h3>
                </div>
            </div>
        </Router>
    );
}
export default Background;