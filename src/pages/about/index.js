import React from 'react';
import { motion } from 'framer-motion'
import './style.css';

const hero = () => {
    return (
        <div
            class="row"
            id="home">
            <div class="col">
                <motion.div
                    exit={{ opacity: 0, x: "-100vw" }}
                    animate={{ opacity: 1, x: 0, }}
                    initial={{ opacity: 1, x: "100vw" }}
                    transition={{ duration: 1, type: "spring" }}
                >
                    <h1>Hey,</h1>
                </motion.div>
                <motion.div
                    exit={{ opacity: 0, x: "-100vw" }}
                    animate={{ opacity: 1, x: 0, }}
                    initial={{ opacity: 1, x: "-100vw" }}
                    transition={{ duration: 1, type: "spring" }}
                >
                    <h1 class="text-sm-left">I'm Scott.</h1>
                </motion.div>
                <motion.div
                    exit={{ opacity: 0, x: "-100vw" }}
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                >
                    <h3 class="text-center">I'm a fullstack web developer.</h3>

                    <div class="container mx-auto row">
                        <p>Full stack web developer with innovative problem solving skills and a mobile-first focus. I have a certificate in full stack development from the University of Arizona and am eager to utilize my skills to develop amazing web experiences. I am skilled in HTML, CSS and Javascript to create both front-end and back-end products. I'm very familiar with various frameworks, especially React. I am learning new skills every day creating personal projects that challenge myself and am excited to leverage these new skills to help build a better web.</p>
                        <a target="_blank" href="./Scott_Harris_-_Full_Stack_Web_Developer.pdf"><button
                            class="btn btn-secondary">View my resume</button></a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default hero;