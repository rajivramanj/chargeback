import React, { useEffect, useState } from 'react'
import './home.css'

const Home = () => {

    // const texts = ['Making Automated UI Testing “Autonomous”','Teams', 'Problem Statement Definition', 'Solution', 'Accelerate Next', 'Wow Factor']

    const texts = ['Guide merchants on chargeback representment']

    const [active, setActive] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setActive((prevState => {
                return (prevState + 1) % texts.length
            }))
        }, 2000)
    }, [])

    return (
        <div className="home">
            <div className="navbar">
                <p className="logo">Chargeback</p>
                <p></p>
            </div>
            <div className="center-container">
                <div className="gif-container" />
                <div className="animate-text">
                    {
                        texts.map((text, index) => {
                            return <div className={`texted ${index === active ? 'active' : 'inactive'}`}>{text}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
