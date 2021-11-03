import React from 'react'
import { motion } from "framer-motion";
import HoveredExpand from '../../components/hovered-expand/hovered-expand';
import JumpTo from '../../components/jump-to/jump-to';
import './wow-factor.css'

const WowFactor = () => {

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
            <div className="wow-factor-container">
                <div className="content-container">
                    <motion.h1 initial="hidden"
                        animate="visible"
                        variants={variants} className="wow-factor-title">Wow Factor and Benefits</motion.h1>
                    <motion.p initial="hidden"
                        animate="visible"
                        variants={variants} className="wow-factor-content">
                        <div className="features">
                            <p className="feature">- Five distinct machine learning models are used to create a voting ensemble approach to improve predictive robustness.  The five models include a Random Forest, two Light GBM (with different hyper-parameters) and two XG Boost (again with different hyper-parameters) algorithms.</p>
                            <p className="feature">- Event Driven Architecture is used to provide scalability to the solution and reduce costs.  This provides for stateless, server-less, scalable cloud resources.  The components include Azure Blob Storage and Azure Functions.</p>
                            <p className="feature">- The Dashboard not only provides bulk prediction reports but also provides the capability for individual predictions.</p>
                            <p className="feature">- The solution also adds an additional layer of business rules with threshold values.  This is brought in to reduce the number of false positives - which can prove expensive to the merchants.</p>
                            <motion.p initial="hidden"
                                animate="visible"
                                variants={variants}  style={{ fontSize: 40, fontStyle: 'italic' }}>
                                <q id="quote">How do we fix the problem?  We can fix the problems by LEVERAGING THE VALUE OF OUR SCALE AND CAPABILITIES.  Shame on us if we are not able to leverage it across all the teams.</q>
                                <p style={{ marginTop: 20, fontStyle: 'normal' }}>- Ido Gileadi</p>
                            </motion.p>
                        </div>
                    </motion.p>
                </div>
            </div>
            <div className="hovered-content-container">
                <HoveredExpand title="Novelty and relevance to FIS and its clients">
                    <div className="expand-parent">
                        <p className="expand-child">- This solution is specifically focused on handling friendly fraud.  A lot of products in the market - that fight fraud are not targeted to friendly fraud. </p>
                        <p className="expand-child">- This provides a very good market opportunity for FIS with more cross sell and subscription based revenue</p>
                        <p className="expand-child">- Merchants use FIS solutions to receive chargeback information</p>
                        <p className="expand-child">- FIS already has data readily available of chargeback, merchants and customers.  Currently there are no tools readily available to provide a score for merchants to help them make a decision on representing chargeback - which provides a good opportunity for this solution</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Value Addition on Existing POC">
                    <div className="expand-parent">
                        <p className="expand-child">- The existing POC looks for a single best model with accuracy of 70%.</p>
                        <p className="expand-child">- Our solution uses a voting ensemble approach to combine the best of five models to give 82% accuracy</p>
                        <p className="expand-child">- A dashboard which provides Batch and Realtime predictions was not part of the original POC which we have provided</p>
                        <p className="expand-child">- Our Dashboard also provides sections for Exploratory Data Analysis and Explainable AI.</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Revenue and Cost Savings Opportunity">
                    <div className="expand-parent">
                        <p className="expand-child">- Revenue Opportunity</p>
                        <img src="https://moadlsgen2.blob.core.windows.net/brainlabs/Revenue hypothesis.JPG" style={{ width: '60%' }} />
                        <p className="expand-child">This data is only for VAP platform</p>
                        <p className="expand-child">**Assumptions**</p>
                        <p className="expand-child">Merchants with average chargeback amount less than $20 will not find it feasible to represent. Cost Savings</p>
                        <p className="expand-child">- Visa Estimates $11.8B is Lost Annually</p>
                        <p className="expand-child">- 28% of all ecommerce revenue today is lost to friendly fraud.</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="New and Nascent Technology">
                    <div className="expand-parent">
                        <p className="expand-child">- Azure ML automated machine learning has been used to determine the top five models and their hyper parameter values.  Automated machine learning is very nascent in the field </p>
                        <p className="expand-child">- Azure ML is a no code solution that helps you build your models </p>
                        <p className="expand-child">- Event Driven architecture has been leveraged to the maximum.  This new architecture of stateless, server-less code is creating a lot of buzz in FIS senior management and in the industry</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Benefits for Merchants and Acquirers">
                    <div className="expand-parent">
                        <p className="expand-child">- The Solution provides Data driven decision making which accounts for merchant specific characteristics.</p>
                        <p className="expand-child">- The Solution would drive More Revenue & Fewer chargeback fees</p>
                        <p className="expand-child">- Less Turnaround time to process or fight dispute</p>
                    </div>
                </HoveredExpand>
            </div>
        </>
    )
}

export default WowFactor
