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
                            <p className="feature">- Autonomous UI testing automates UI testing from the beginning with minimum inputs and also automates the extraction of elements and flows</p>
                            <p className="feature">- It brings in AI/ML for maintenance and analytics while handling the changes from one release to another using self-healing AI concepts</p>
                            <p className="feature">- The testing can be optimized to a smaller sub-set of test scenarios so that only the relevant permutations of test scenarios are executed in some situations.  Alternatively – all scenarios generated as combinations can be comprehensively executed automatically.</p>
                            <p className="feature">- Interactive Dashboard make available the output through representative reports.</p>
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
                <HoveredExpand title="Autonomous UI Testing Workflow – Initial Setup" color="#000">
                    <div className="expand-parent">
                        <p className="expand-child">For the first run, the UI-driver module will be executed. This is a Python-based program that runs and identifies all the flows automatically for all screens in a given URL and stores them as a reference in a database. The result of the execution is analyzed and displayed on a dashboard containing information about the flows the program identified and executed and their corresponding results. In parallel, the Deep Learning model is trained and engaged in self-healing for the next run.</p>
                        <div className="flex-container">
                            <div className="img-1" />
                        </div>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Autonomous UI Testing Workflow – Regular Execution" color="#000">
                    <div className="expand-parent">
                        <p className="expand-child">For each iteration the UI-driver module references the database for base flows and identifies the changes in the new UI. The changes are then matched against the original UI using the Deep Learning AI model trained earlier. The model then heals the flows as needed for the updated interface. Newly added features are also identified, which are sent along with updated flows to the UI-driver module for execution to analyze and store the results.The comparisons and inference related to the previous and current execution, along with the details of self-healing and updated features, are shown on a user friendly dashboard. The dashboard enables the user to provide feedback to the solution, a process which makes the tool even more robust and accurate over time</p>
                        <div className="flex-container">
                            <div className="img-2" />
                        </div>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Deep Learning Implementation of Self Healing" color="#000">
                    <div className="expand-parent">
                        <p className="expand-child">- We have extracted locators of HTML elements from multiple websites consisting a total of approximately 8000 records.</p>
                        <p className="expand-child">- We have trained a Seq to Seq Deep Learning Model (ULM Fit) using Azure ML on the data.</p>
                        <p className="expand-child">- ULM Fit is used here to make the model understand the semantics of HTML locators.</p>
                        <p className="expand-child">- Model is then fine tuned to find the similarity between the two HTML locators.</p>
                        <p className="expand-child">- Model is used for self healing to recognize the changes in the recorded UI Screen and provides the similarity score on the basis of the comparison.</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="ULM Fit" color="#000">
                    <img className="ulm-img" src="https://moadlsgen2.blob.core.windows.net/brainlabs/Flow3.png" />
                </HoveredExpand>
                <HoveredExpand title="New Innovation in 48 hours" color="#000">
                    <div className="expand-parent">
                    <p className="expand-child">Additions include new functionality and enhancements such as</p>
                        <p className="expand-child">- While the regional solution executed test scenarios of all combinations across all elements : the new functionality that we have added is to make it more intelligent to just determine the correct combinations which are prioritized and thereby save time to complete the test execution.  The testing now happens much more RAPIDLY. The user just has to provide what is needed to be tested in plain English language and our solution will use the enhanced AI/ Machine Learning capability to execute the steps mentioned without writing any test scripts. As it is intelligently converting the text into execution step and automatically executing it, we are calling it INTELLIGENT AUTONOMOUS TESTING.</p>
                        <p className="expand-child">- In the earlier version we were just making the solution work for an input text box and a button. But now we are making our solution work for all possible form fields available in a page. This is were we have leveraged Wavemaker. </p>
                        <p className="expand-child">- We have revamped the dashboard completely in Wavemaker - with supporting charts using D3.js</p>
                        <p className="expand-child">- Regional solution had the data stored locally in csv. Since our data has become quite exhaustive due to more controls, we have adopted COULD NATIVE database by using Postgres on Azure.</p>
                    </div>
                </HoveredExpand>
            </div>
        </React.Fragment>
    )
}

export default Solution
