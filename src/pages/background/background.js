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
                        variants={variants} className="background-title">Background and Objective</motion.h1>
                    <motion.p initial="hidden"
                        animate="visible"
                        variants={variants} className="background-content">
                        <div className="features">
                            <img src="https://moadlsgen2.blob.core.windows.net/brainlabs/friendly_fraud.JPG" style={{ marginBottom: 30 }} />
                            <p className="feature">- Currently 41% of chargebacks go un-represented by the merchants. A significant contributor to customer chargeback requests is friendly fraud that some customers do thereby causing loss to the merchant</p>
                            <p className="feature">- Objective of this solution is to bring down the chargebacks that are unrepresented by the merchants from 41% to 20%</p>
                        </div>
                    </motion.p>
                    <motion.p initial="hidden"
                        animate="visible"
                        variants={variants} className="background-content" style={{ fontSize: 40, fontStyle: 'italic' }}>
                        <q id="quote">Approximately $2 billion out of $11 billion could be saved.</q>
                    </motion.p>
                </div>
            </div>
            <div className="hovered-content-container">
                <HoveredExpand title="Financial Loss">
                    <div className="expand-parent">
                        <p className="expand-child">
                            - 80-85% of chargebacks happen due to friendly fraud.
                        </p>
                        <p className="expand-child">
                            - Visa Estimates $11.8B is Lost Annually due to this
                        </p>
                        <p className="expand-child">
                            - 28% of all ecommerce revenue today is lost to friendly fraud.
                        </p>
                        <p className="expand-child">
                            - 40% of consumers who commit friendly fraud will do it again within 60 days.
                        </p>
                    </div>
                </HoveredExpand>
                <HoveredExpand title="Risk and Reputation">
                    <div className="expand-parent">
                        <p className="expand-child">
                            - High Risk Liability on Acquirer and Merchant.
                        </p>
                        <p className="expand-child">
                            - Merchant loss: Loss of the goods/services plus the cost of the chargeback
                        </p>
                        <p className="expand-child">
                            - False chargebacks impact the Network Chargeback Threshold ratio.
                        </p>
                        <p className="expand-child">
                            - Acquirer loss: Fees and reputational loss.
                        </p>
                        <p className="expand-child">
                            - Impact on the Relationship between Merchant, Acquirer and Networks.
                        </p>
                    </div>
                </HoveredExpand>
            </div>
        </>
    )
}

export default Background
