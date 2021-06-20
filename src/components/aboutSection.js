 import React from 'react'
import home1 from '../img/home1.png'
import { About,Image,Description,Hide } from '../styles'
import { motion } from 'framer-motion'
const AboutSection = () => {

const titleAnim = {
    hidden: {opacity:0},
    show:{opacity:1, transition:{duration:"2"}}
}
const container = {
    hidden : {x:100},
    show:{x:0,transition:{duration:0.75,ease:"easeOut"}}
}
    return(
        <About>
            <Description>
                <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="title"
                >
                <Hide>
                    <motion.h2 
                        variants={titleAnim} initial="hidden" animate="show"
                    >We work to make
                    </motion.h2>
                </Hide>
                <Hide>
                    <h2>your <span>Drems</span> come</h2>
                </Hide>
                <Hide>
                    <h2>true.</h2>
                </Hide>
                </motion.div>
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