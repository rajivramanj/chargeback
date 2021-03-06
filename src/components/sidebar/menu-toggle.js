import React from "react";
import { motion } from "framer-motion";
import { useHistory, useLocation } from 'react-router-dom'
import { darkPages } from "../../helper";


export const MenuToggle = ({ toggle }) => {

    const location = useLocation()


    const Path = props => (
        <motion.path
            // fill="#fff"
            strokeWidth="3"
            stroke={darkPages.includes(`${location.pathname}`) ? '#000' : '#fff'}
            strokeLinecap="round"
            {...props}
        />
    );

    return <button onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
};
