import React from 'react';
import { motion } from 'framer-motion'
import './style.css';

const work = () => {
    return (
        <div class="container">
            <h1 id="work-title">Featured Work</h1>
            <motion.div
                exit={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: "100vh" }}
                transition={{ duration: .6 }}
                id="work"
            >
            <div id="projects">
                <div class="row">
                    <div class="col">
                        <div class="project">
                            <div class="content">
                                <div class="row">
                                    <div class="col">
                                        <div class="text-center"><h3>Streaker</h3></div>
                                    </div>
                                </div>
                            </div>
                            <img class="center-block" src="./img/streaker.png"></img>
                            <div class="links">
                                <div class="row">
                                    <div class="col">
                                        <div class="text-center"><a class="text-dark" target="_blank" href="https://streaker-app.herokuapp.com">Deployed</a>/<a class="text-dark" target="_blank" href="https://github.com/scottsharris-az/Streaker">Github</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="project">
                            <div class="content">
                                <div class="row">
                                    <div class="col">
                                        <div class="text-center"><h3>Move Me</h3></div>
                                    </div>
                                </div>
                            </div>
                            <img src="./img/moveme.png"></img>
                            <div class="links">
                                <div class="row">
                                    <div class="col">
                                        <div class="text-center"><a class="text-dark" target="_blank" href="https://move-me-by-glass.netlify.app/">Deployed</a>/<a class="text-dark" target="_blank" href="https://github.com/Dayman628/move-me">Github</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="project">
                            <div class="content">
                                <div class="row">
                                    <div class="col">
                                        <div class="text-center"><h3>Employee Manager</h3></div>
                                    </div>
                                </div>
                            </div>
                            <img src="./img/employeeManager.gif"></img>
                            <div class="links">
                                <div class="row">
                                    <div class="col">
                                        <div class="text-center"><a class="text-dark" target="_blank" href="https://github.com/scottsharris-az/employee-tracker">Github</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="project">
                            <div class="content">
                                <div class="row">
                                    <div class="col">
                                        <div class="text-center"><h3>The Burger Place</h3></div>
                                    </div>
                                </div>
                            </div>
                            <img src="./img/burger.gif"></img>
                            <div class="links">
                                <div class="row">
                                    <div class="col">
                                        <div class="text-center"><a class="text-dark" target="_blank" href="https://the-burger-place.herokuapp.com/">Deployed</a>/<a class="text-dark" target="_blank" href="https://github.com/scottsharris-az/burger-handlebars">Github</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="project">
                            <div class="content">
                                <div class="row">
                                    <div class="col">
                                        <div class="text-center"><h3>Weather Dashboard</h3></div>
                                    </div>
                                </div>
                            </div>
                            <img src="./img/weatherapp.png"></img>
                            <div class="links">
                                <div class="row">
                                    <div class="col">
                                        <div class="text-center"><a class="text-dark" target="_blank" href="https://scottsharris-az.github.io/weather-dashboard/">Deployed</a>/<a class="text-dark" target="_blank" href="https://github.com/scottsharris-az/weather-dashboard">Github</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="project">
                            <div class="content">
                                <div class="row">
                                    <div class="col">
                                        <div class="text-center"><h3>Employee Directory</h3></div>
                                    </div>
                                </div>
                            </div>
                            <img src="./img/employeeDirectory.gif"></img>
                            <div class="links">
                                <div class="row">
                                    <div class="col">
                                        <div class="text-center"><a class="text-dark" target="_blank" href="https://employee-directoryy.herokuapp.com/">Deployed</a>/<a class="text-dark" target="_blank" href="https://github.com/scottsharris-az/react-employee-directory">Github</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </motion.div >
        </div>
    )
};

export default work;