import { motion } from 'framer-motion'
import React from 'react'
import TeamMember from '../../components/team-member/team-member'
import JumpTo from '../../components/jump-to/jump-to'

import './team-and-solution.css'

const TeamaAndSolution = () => {

    const variants = {
        visible: {
            opacity: 1,
            transition: {
                delay: 1,
                ease: "easeOut"
            },
            y: 0
        },
        hidden: { opacity: 0, y: 50 },
    }
    return (
        <div className="teams-and-solution-container">
            <JumpTo color="#000" />
            <div className="solution-container">
                <div className="content-container">
                    <motion.h1 initial="hidden"
                        animate="visible"
                        variants={variants} className="solution-title">Team</motion.h1>
                    <motion.p initial="hidden"
                        animate="visible"
                        variants={variants} className="solution-content">
                        <div className="features">
                            <p className="feature">We are the AutoUI Wizards who have developed the Autonomous UI Testing Solution using Machine Learning.</p>
                        </div>
                    </motion.p>
                </div>
            </div>

            <div className="members-container">
                <TeamMember
                    name="Harsh Sharma"
                    role="The Machine Learning specialist"
                    imageUrl="https://moadlsgen2.blob.core.windows.net/brainlabs/harsh.jpg" />
                    <TeamMember
                        name="Yogendra Katheria"
                        role="The Machine Learning specialist and the Python UI go-to guy"
                        imageUrl="https://moadlsgen2.blob.core.windows.net/brainlabs/yogendra.jpg" />
                <TeamMember
                    name="Seerajudeen Sheik Ahamed"
                    role="The Python wiz kid of the team"
                    imageUrl='https://moadlsgen2.blob.core.windows.net/brainlabs/seeraj.jpg' />
                <TeamMember
                    name="Balakrishnan Ramasamy"
                    role="The emerging technologies evangelist and UI/UX developer"
                    imageUrl="https://moadlsgen2.blob.core.windows.net/brainlabs/bala.jpg"
                />
                <TeamMember
                    name="Rajiv Ramanjani"
                    role="The Captain of the team."
                    imageUrl="https://moadlsgen2.blob.core.windows.net/brainlabs/rajiv.jpg" />

            </div>

        </div>
    )
}

export default TeamaAndSolution
