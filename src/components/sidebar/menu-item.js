import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom'
import { darkPages } from "../../helper";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export const MenuItem = ({ i, toggle, color }) => {
    const location = useLocation()

    return (
        <motion.li
            variants={variants}
            whileHover={{ x: 20 }}
            whileTap={{ scale: 0.95 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="nav-li"
        >
            <Link style={{ color: color }} className="nav-link" to={i.navigateTo} onClick={toggle}>
                <span className={`ball ${darkPages.includes(`${location.pathname}`) ? 'black-ball' : 'white-ball'}`}></span>
                {i.name}
            </Link>
        </motion.li>
    );
};
