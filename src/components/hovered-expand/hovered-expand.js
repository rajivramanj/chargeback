import React from 'react'
import { motion } from "framer-motion";
import './hovered-expand.css'


const HoveredExpand = (props) => {
    const { color = '#fff' } = props
    const textMotion = {
        rest: {
            color: "grey",
            transition: {
                duration: 2,
                type: "tween",
                ease: "easeIn"
            }
        },
        hover: {
            color: color,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeOut"
            }
        }
    };

    // const childrenMotion = {
    //     rest: { opacity: 0, ease: "easeOut", duration: 0.2, height: 0 },
    //     hover: {
    //         opacity: 1,
    //         height: 'auto',
    //         transition: {
    //             duration: 0.4,
    //             ease: "easeOut"
    //         }
    //     }
    // };
    return (
        <motion.div className="hovered-container" initial="rest" whileHover="hover" animate="rest">
            <motion.h1 variants={textMotion} className="hovered-title">
                {props.title}
            </motion.h1>
            <motion.div className="hovered-children">
                {props.children}
            </motion.div>
        </motion.div>
    )
}

export default HoveredExpand
