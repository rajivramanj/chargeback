import { motion } from 'framer-motion'
import React from 'react'
import HoveredExpand from '../../components/hovered-expand/hovered-expand'
import JumpTo from '../../components/jump-to/jump-to'
import './solution.css'

const Solution = () => {

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
        <React.Fragment>
            <JumpTo color="#000" />
            <div className="solution-container">
                <div className="content-container">
                    <motion.h1 initial="hidden"
                        animate="visible"
                        variants={variants} className="solution-title">SOLUTION</motion.h1>
                    <motion.p initial="hidden"
                        animate="visible"
                        variants={variants} className="solution-content">
                        <div className="features">
                            <p className="feature">- Receive Chargeback Data on periodic cadence</p>
                            <p className="feature">- Predict the likelihood of a win or a loss if a merchant should make a representment to the chargeback or not</p>
                            <p className="feature">- Generate reports with advisories to the merchant with information to help make a decision.</p>
                            <p className="feature">- Reports would contain details of win/loss percentage along with overall recommendation.</p>
                            <p className="feature">- The solution adds a layer of business rules to bring in threshold to reduce false positives.</p>
                        </div>
                    </motion.p>
                    <motion.p initial="hidden"
                        animate="visible"
                        variants={variants} className="solution-content" style={{ fontSize: 40, fontStyle: 'italic' }}>
                        <q id="quote">We live at the street corner of complexity and velocity.  So if we could control the complexity and make it a little more simple, allow teams to have the tools - it makes for a much better client experience.  EX + CX = RX <br />
EX/Employee Experience; CX/Client Experience; RX/Revenue Expansion
To be able to do that - we need the right tools for our Employees</q>
                        <p style={{ marginTop: 20, fontStyle: 'normal' }}>- Brian O’Neill</p>
                    </motion.p>
                </div>
            </div>
            <div className="hover-elements-container">
                <HoveredExpand title="Architecture and Technical Flow" color="#000">
                    <div className="expand-parent">
                        <p className="expand-child">- Event Driven Choreography and Architecture is used.</p>
                        <p className="expand-child">- Daily chargeback data is expected to be uploaded to the cloud once a day.  The upload would happen to the Azure Blob Storage.</p>
                        <p className="expand-child">- The data upload to the Blob would trigger the Azure Functions code which is stateless and server-less.</p>
                        <p className="expand-child">- This code would do the Machine Learning predictions and finally upload the results as an output csv in the Azure Blob Storage.</p>
                        <p className="expand-child">- This csv is pulled by the front-end Dashboard which shows the prediction report.</p>
                        <div className="flex-container">
                            <div className="img-1" />
                        </div>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Technology Stack" color="#000">
                    <div className="expand-parent">
                        <div className="flex-container">
                            <div className="img-2" />
                        </div>
                        <p className="expand-child"><b>Code Written In</b></p>
                        <p className="expand-child">- Python, HTML, CSS</p>
                        <p className="expand-child"><b>Open Source and Proprietary</b></p>
                        <p className="expand-child">- Proprietary - Azure Cloud Services</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Security" color="#000">
                    <div className="expand-parent">
                        <p className="expand-child">- The data comes from internal FIS sources.</p>
                        <p className="expand-child">- The cloud tool stack are from Microsoft - Azure FIS Private Cloud whose security has been well reviewed and whetted.</p>
                    </div>
                </HoveredExpand>
            </div>
        </React.Fragment>
    )
}

export default Solution
