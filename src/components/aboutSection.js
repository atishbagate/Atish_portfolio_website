import React from 'react'
import home1 from '../img/home1.png'
import styled from 'styled-components'
import { About,Image,Description,Hide } from '../styles'
const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                <Hide>
                    <h2>We work to make</h2>
                </Hide>
                <Hide>
                    <h2>your <span>Drems</span> come</h2>
                </Hide>
                <Hide>
                    <h2>true.</h2>
                </Hide>
                </div>
                <p>Contact us for professional vedio editing for youtube, tiktok, Instagram <br /> or any social media platform.</p>
                <button>contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="boy with camera." />
            </Image>
        </About>
    )
}

export default AboutSection;