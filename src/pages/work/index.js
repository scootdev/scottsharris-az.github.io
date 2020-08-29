import React from 'react';
import { motion } from 'framer-motion';
import Project from '../../components/project';
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
                        <Project
                            title="Streaker"
                            img="./img/streaker.png"
                            deployed="https://streaker-app.herokuapp.com"
                            git="https://github.com/scottsharris-az/Streaker"
                        />
                        <Project
                            title="Move Me"
                            img="./img/moveme.png"
                            deployed="https://move-me-by-glass.netlify.app/"
                            git="https://github.com/Dayman628/move-me"
                        />
                        <Project
                            title="Employee Manager"
                            img="./img/employeeManager.gif"
                            deployed="https://github.com/scottsharris-az/employee-tracker"
                            git="https://github.com/scottsharris-az/employee-tracker"
                        />
                    </div>
                    <div class="row">
                        <Project
                            title="The Burger Place"
                            img="./img/burger.gif"
                            deployed="https://the-burger-place.herokuapp.com/"
                            git="https://github.com/scottsharris-az/burger-handlebars"
                        />
                        <Project
                            title="Weather Dashboard"
                            img="./img/weatherapp.png"
                            deployed="https://scottsharris-az.github.io/weather-dashboard/"
                            git="https://github.com/scottsharris-az/weather-dashboard"
                        />
                        <Project
                            title="Employee Directory"
                            img="./img/employeeDirectory.gif"
                            deployed="https://employee-directoryy.herokuapp.com/"
                            git="https://github.com/scottsharris-az/react-employee-directory"
                        />
                    </div>
                </div>
            </motion.div >
        </div>
    )
};

export default work;