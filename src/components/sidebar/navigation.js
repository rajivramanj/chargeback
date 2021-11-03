import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = ({ toggle, color }) => (
    <motion.ul variants={variants} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
            <MenuItem color={color} toggle={toggle} i={{ name: 'Home', navigateTo: '/' }} key='Home' />
        </div>
        <div>
            {items.map(i => (
                <div className="item-container-navigation">
                    <MenuItem color={color} toggle={toggle} i={i} key={i.name} />
                </div>
            ))}
        </div>
    </motion.ul>
);

const items = [
    { name: 'Background and Objective', navigateTo: '/background' },
    { name: 'Solution', navigateTo: '/solution' },
    { name: 'Wow Factor', navigateTo: '/wow-factor' },
    // { name: 'Accelerate Next', navigateTo: '/accelerate' },
    { name: 'Team', navigateTo: '/teams-and-solution' },
];
