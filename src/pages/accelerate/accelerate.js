import React from 'react'
import { motion } from "framer-motion";
import HoveredExpand from '../../components/hovered-expand/hovered-expand';
import JumpTo from '../../components/jump-to/jump-to'

import './accelerate.css'

const Accelerate = () => {

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
        <>
            <JumpTo color="#fff" />
            <div className="accelerate-container">
                <div className="content-container">
                    <motion.h1 initial="hidden"
                        animate="visible"
                        variants={variants} className="accelerate-title">Accelerate Next</motion.h1>
                    <motion.p initial="hidden"
                        animate="visible"
                        variants={variants} className="accelerate-content" style={{ fontSize: 40, fontStyle: 'italic' }}>
                        <q id="quote">Accelerate Next is our next phase of innovation. Through this effort, we will focus on accelerating innovation across our business. We’ll drive fast, agile, frictionless delivery and simplified experiences.</q>
                        <p style={{ marginTop: 20, fontStyle: 'normal' }}>- Bruce Lowthers</p>
                    </motion.p>
                </div>
            </div>
            <div className="hovered-content-container-accelerate">
                <HoveredExpand title="Acceleration">
                    <div className="expand-parent">
                        <p className="expand-child">Our solution brings in approximately 3x acceleration.  In the conventional automation testing – if a resource would take 60 hrs to complete the testing – then here the same person would take 23.5 hrs.</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Cost Savings">
                    <div className="expand-parent">
                        <p className="expand-child">For a single resource the savings is around $525</p>
                        <img src="https://autoui.blob.core.windows.net/innovate/savings_table.JPG" />
                        <p className="expand-child">- Cost savings in terms of man hours spent to do testing is significant</p>
                        <p className="expand-child">- Training cost is reduced as the solution is framework agnostic</p>
                        <p className="expand-child">- Testers with less specialized coding background can be leveraged - thereby saving on hiring costs</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Market Opportunity and fit for FIS">
                    <div className="expand-parent">
                        <p className="expand-child">We foresee that 10-100 internal and external customers would benefit from this solution.  Also since many teams within FIS do a lot of UI testing either using manual methods or using automation testing frameworks – they would benefit immensely by this solution</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Speed to Market">
                    <div className="expand-parent">
                        <p className="expand-child">Since this solution is being developed by the same team that has developed the Autonomous API testing solution (filed for patent) the speed to market of the Autonomous UI testing is less than 6 months</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Theme Details">
                    <div className="expand-parent">
                        <p className="expand-child">Our Solution aligns into the following areas</p>
                        <img src="https://moadlsgen2.blob.core.windows.net/autowiz/accelerate.jpg" />
                        <p className="expand-child">• Accelerating our speed of delivery of next-gen technologies and best-in-class cloud solutions, simplifying processes and enhancing performance (Example technologies include Low Code/No Code, RPA)</p>
                        <p className="expand-child">• Accelerating automation, leveraging artificial intelligence, robotic process automation and data-driven business process solutions to enhance the client experience and make it easier to do business with FIS (Example technologies include NLP, AI/ML, AR/VR)</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Low Code, No Code">
                    <div className="expand-parent">
                        <p className="expand-child">Our solution itself was developed some low-code, no-code tools such as Azure Automated ML and Wavemaker.  Besides</p>
                        <p className="expand-child">• Our solution itself provides developers a no-code approach to make UI testing autonomous</p>
                        <p className="expand-child">• Thereby simplifying the process and enhancing performance</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Artificial Intelligence">
                    <div className="expand-parent">
                        <p className="expand-child">Our solution automates the learning process of the solution by leveraging AI solutions to enhance the client experience and making it easier to do business with FIS.  We have used ULM Fit , LSTM and BERT as components</p>
                    </div>
                </HoveredExpand>
            </div>
        </>
    )
}

export default Accelerate
