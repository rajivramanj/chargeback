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
                        variants={variants} className="wow-factor-title">Wow Factor and Technology</motion.h1>
                    <motion.p initial="hidden"
                        animate="visible"
                        variants={variants} className="wow-factor-content">
                        <div className="features">
                            <p className="feature">- No manual efforts required to analyze the application structure or to understand the framework.  Also no coding knowledge is required.</p>
                            <p className="feature">- The solution automates the process of identifying all the different web elements and it also automates the process  to identify all the flows and navigation within a screen and across multiple screens.</p>
                            <p className="feature">- Machine learning module makes the solution more robust and helps in achieving self-healing eliminating   manual maintenance efforts and the new NLP capabilities help prioritize test scenarios as per the business needs.</p>
                            <p className="feature">- Interactive dashboards helps analyze various aspects of the solution outputs.</p>
                            <p className="feature">- A patent has been successfully filed in India and the US and a <a href="https://www.fisglobal.com/-/media/fisglobal/files/pdf/white-paper/Autonomous-UI-Testing-with-AI-White-Paper.pdf" target="_blank" style={{ color: '#0e63e5' }}>white paper</a> has been published in the FIS sales portal. This corresponds to the regionals round solution.</p>
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
                        <p className="expand-child">- FIS already has GATS and SAFAL as two automation frameworks and these use scripts which take a lot of time to build. </p>
                        <p className="expand-child">- Our solution adds a flavor of autonomous script-less UI testing which can amplify the benefits manifold</p>
                        <p className="expand-child">- External clients like JPMC, who leverage GATS, have already expressed an interest in the autonomous UI testing solution that has self-healing.  This solution could bring in revenue to FIS</p>
                        <p className="expand-child">- Many internal teams like MBP, IBS etc. could benefit from this solution thereby giving a lot of cost savings</p>
                        <p className="expand-child">- Solution is targeted at Developers and Testers who have any involvement with UI development, testing and maintenance</p>
                        <p className="expand-child">- “Citizens Testers” as a new concept is being introduced along with “Fusion Teams” – by which anybody with a business understanding of the application can use our solution to do a comprehensive testing with minimum to no training</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="New Technology">
                    <div className="expand-parent">
                        <p className="expand-child">- Azure ML: using Automated ML which uses a no-code approach.</p>
                        <p className="expand-child">- Wavemaker: It is a low code development platform for developing a modern, end-to-end app, that works out-of-the-box. This was demonstrated in the recent CTDO conference. Sangy Vatsa and Muhammad Khan are the key stakeholders in FIS for this</p>
                        <p className="expand-child">- BERT & LSTM Bert has been the state of the art model for NLP tasks. It is based on transformer architecture. We are using the combination of BERT and LSTM to map english language to html elements in a web page</p>
                        <p className="expand-child">-ULM fit: This is an algorithm about “how” the LSTM models should be trained. First we need the model to understand the contextual and logical structure of the language and then fine tune the model on any downstream task involving that language. For eg, in our case we want to find if two html elements are same or not , so we first need the model to understand html and then it can do the similarity finding task.</p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Other Tech Stack">
                    <div className="expand-parent">
                        <p className="expand-child">- Pytorch for Deep Learning, Python, Dash based on Flask, Selenium,</p>
                        <p className="expand-child">- Azure ML, Cuda, Celery, Redis, CSS, HTML</p>
                        <img src="https://autoui.blob.core.windows.net/innovate/tech_stack.JPG" style={{ width: '60%' }} />
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Security">
                    <div className="expand-parent">
                        <p className="expand-child">Our solution has been hosted on Azure and AWS cloud. The security of both these has been well whetted by FIS. So security has been taken care of.</p>
                    </div>
                </HoveredExpand>
            </div>
        </>
    )
}

export default WowFactor
