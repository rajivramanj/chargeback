import React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useLocation } from "react-router";
import { useDimensions } from "../../hooks/use-dimensions";
import { MenuToggle } from "./menu-toggle";
import { Navigation } from "./navigation";
import { darkPages } from "../../helper";
import './sidebar.css'

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const Sidebar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    const location = useLocation()

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className={`sidebar ${!isOpen ? 'closed' : 'open'}`}
        >
            <motion.div className={`background ${darkPages.includes(`${location.pathname}`) ? 'background-light' : 'background-dark'}`} variants={sidebar} />
            <Navigation color={darkPages.includes(location.pathname) ? '#000' : '#fff'} toggle={toggleOpen} isOpen={isOpen} />
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};
