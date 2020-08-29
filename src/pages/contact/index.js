import React from 'react';
import { motion } from 'framer-motion'
import './style.css';

const contact = () => {
    return (
        <motion.div
            exit={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0, }}
            initial={{ opacity: 1, x: "100vw" }}
            transition={{ duration: 1, type: "spring" }}
        >
            <div class="row bg-primary" id="contact">
                <div class="col p-4">
                    <h2>Shoot me a message...</h2>
                    <div class="text-primary container py-5 bg-secondary">
                        <div class="row text-center">
                            <div class="col">
                                <h4>Scott Harris</h4>
                                <h4>scottsharris@yahoo.com</h4>
                                <h4>+1 (520) 351-9518</h4>
                                <a class="mx-auto" target="_blank"
                                    href="https://www.linkedin.com/in/scottharris-az/"><i
                                        class="fab fa-linkedin fa-5x mx-2"></i></a><a target="_blank"
                                            href="https://github.com/scottsharris-az"><i
                                                class="fab fa-github-square fa-5x"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default contact;