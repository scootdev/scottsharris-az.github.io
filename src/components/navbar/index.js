import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion';

const navbar = () => {

    return (
        <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <nav class="row mb-3" id="nav">
                <div class="col">
                    <NavLink to="/" exact>
                        <button class="btn btn-nav">
                            About
                            </button>
                    </NavLink>
                    <NavLink to="/work">
                        <button class="btn btn-nav">
                            Work
                            </button>
                    </NavLink>
                    <NavLink to="/contact">
                        <button class="btn btn-nav">
                            Contact
                            </button>
                    </NavLink>
                </div>
            </nav >
        </motion.div>
    )
}

export default navbar;