import { motion } from 'framer-motion';
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { darkPages } from '../../helper';
import './jump-to.css'

const JumpTo = (props) => {
    const location = useLocation()

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

    const items = [
        { name: 'Background and Objective', navigateTo: '/background' },
        { name: 'Solution', navigateTo: '/solution' },
        { name: 'Wow Factor', navigateTo: '/wow-factor' },
        // { name: 'Accelerate Next', navigateTo: '/accelerate' },
        { name: 'Team', navigateTo: '/teams-and-solution' },
    ];
    return (
        <div className="jump-to">
            <div className="title">Jump to</div>
            <div>
                {items.map(i => (
                    <motion.li
                        variants={variants}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ ease: "easeOut", duration: 0.2 }}
                        className="jump-to-nav-li"
                    >
                        <Link style={{ color: props.color }} className="jump-to-link" to={i.navigateTo}>
                            <span className={`ball-jump-to ${darkPages.includes(`${location.pathname}`) ? 'white-ball' : 'black-ball'}`}></span>
                            {i.name}
                        </Link>
                    </motion.li>
                ))}
            </div>
        </div>
    )
}

export default JumpTo
