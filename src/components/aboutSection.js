 import React from 'react'
import home1 from '../img/home1.png'
import { About,Image,Description,Hide } from '../styles'
import { motion } from 'framer-motion'
import { titleAnim,fade,photoAnim } from '../animation'
import Wave from './Wave'
const AboutSection = () => {

// const titleAnim = {
//     hidden: {opacity:0},
//     show:{opacity:1, transition:{duration:"2"}}
// }
// const container = {
//     hidden : {x:100},
//     show:{x:0,transition:{duration:0.75,ease:"easeOut"}}
// }
    return(
        <About>
            <Description>
                <motion.div
                // variants={container}
                // initial="hidden"
                // animate="show"
                // className="title"
                >
                <Hide>
                    <motion.h2 variants={titleAnim}>We work to make
                    </motion.h2>
                </Hide>
                <Hide>
                    <motion.h2  variants={titleAnim}>your <span>Drems</span> come</motion.h2>
                </Hide>
                <Hide>
                    <motion.h2  variants={titleAnim}>true.</motion.h2>
                </Hide>
                </motion.div>
                <motion.p variants={fade}>Contact us for professional vedio editing for youtube, tiktok, Instagram <br /> or any social media platform.</motion.p>
                <motion.button variants={fade}>contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={home1} alt="boy with camera." />
            </Image>
            <Wave/>
        </About>
    )
}

export default AboutSection;