import React from 'react'
import home1 from '../img/home1.png'
const AboutSection = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                <div className="hide">
                    <h2>We work to make</h2>
                </div>
                <div className="hide">
                    <h2>your <span>Drems</span> come</h2>
                </div>
                <div className="hide">
                    <h2>true.</h2>
                </div>
                </div>
                <p>Contact us for professional vedio editing for youtube,tiktok,Instagram,or any social media platform.</p>
                <button>contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="boy with camera." />
            </div>
        </div>
    )
}
export default AboutSection;