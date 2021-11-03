import React from 'react'
import { motion } from "framer-motion";
import HoveredExpand from '../../components/hovered-expand/hovered-expand';
import JumpTo from '../../components/jump-to/jump-to'
import './background.css'

const Background = () => {

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
            <div className="background-container">
                <div className="content-container">
                    <motion.h1 initial="hidden"
                        animate="visible"
                        variants={variants} className="background-title">Problem Statement</motion.h1>
                    <motion.p initial="hidden"
                        animate="visible"
                        variants={variants} className="background-content">
                        End-to-end tests are key to ensuring we deliver the kind of robust, high quality and usable software necessary to compete at the highest level and accelerate the growth of our company.
                        BUT
                        Its downside can be summed up in a single word, COST. With its extreme setup and overall control and monitoring requirements, Automation Testing is easily the most expensive and time-consuming software quality test method.
                        <br />
                        <br />

                    </motion.p>
                    <motion.p initial="hidden"
                        animate="visible"
                        variants={variants} className="accelerate-content" style={{ fontSize: 40, fontStyle: 'italic' }}>
                        <q id="quote">And because if you don't create the simplicity and therefore reduce the investments in these myriad  platforms, you don't get the speed.  That means each time you have to make a change, we're making it on six platforms versus one. We're also wasting our really expensive development resources.</q>
                        <p style={{ marginTop: 20, fontStyle: 'normal' }}>- Vicky Bindra</p>
                    </motion.p>
                </div>
            </div>
            <div className="hovered-content-container">
                <HoveredExpand title="Summary">
                    <div className="expand-parent">
                        <p className="expand-child">
                            - Current conventional Automation tools are tightly coupled with a framework, which in turn makes it necessary for the teams using the solution to understand the framework, have the programming knowledge to automate and write the scripts.
                        </p>
                        <p className="expand-child">
                            - There is a stickiness and dependency on the scripting technology used for automation<br /> End result: Testing teams whose expertise is testing via scenario definition, fall into category of developers by having to spend majority of time in scripting scenarios
                        </p>
                        <p className="expand-child">
                            - Teams spent considerable time in analyzing the application user interface, identify necessary locators and write the scripts for automating the process. This is a time and efforts consuming process.
                        </p>
                        <p className="expand-child">
                            - Any new enhancements or debugging involves backtracking the changes in the user interface and making the corresponding changes in scripts to make automation scripts run.
                        </p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Changing UI Continuously">
                    <div className="expand-parent">
                        <p className="expand-child">Considering the latest technologies emerging these days web applications need regular upgrades. This involves a lot of change. This change can be related to any new version, integration with the third party tools or maybe sometimes, there are new functionalities that we want to implement in our web apps.  This could lead to missing out on enhancing the UI tests in a way that can be utilized later.</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Increasing Complexity of Testing Web Elements">
                    <div className="expand-parent">
                        <p className="expand-child">Latest web functionalities that we implement in our web applications can include various web elements. Those elements can be embedded frames and other products as well. Sometimes, large enterprise websites contain complex flowcharts, diagrams, maps, etc. These make the website’s UI test automation complex.</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Maintaining Automated UI Scripts">
                    <div className="expand-parent">
                        <p className="expand-child">What happens in UI automated test scripts is, that it is difficult to maintain. Web developers often make changes to UI rather to the logic of the features and functionalities. With this, the UI test scripts fail each time there are new changes to the UI. Hence, maintenance of the UI scripts has been a challenge for long.</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Creating Effective UI automation tests take time">
                    <div className="expand-parent">
                        <p className="expand-child">Everybody is talking about automating tests at DevOps speed. But, this does not affect creating UI automated tests as it takes a great deal of time and patience. Also, you know that there are a few tools that do not support recorded UI automation tests. This creates challenges for developing automated test scripts for UI, effectively.</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Reviewing Quality Code standards">
                    <div className="expand-parent">
                        <p className="expand-child">Each developer involved in developing an application will have different coding and code commenting styles. This makes it difficult for other developers as well as testers to review it sooner or later for modifications or maintenance. Already, creating UI automated tests took time and without maintaining the coding standards, it will be extremely challenging to review or modify it sooner or later.</p>
                    </div>
                </HoveredExpand>
            </div>
        </>
    )
}

export default Background
