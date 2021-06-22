 import React from 'react'
 //importing pages components 
 import AboutSection from '../components/aboutSection'
 import ServicesSection from '../components/ServicesSection'
import FaqSection from '../components/FaqSection'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import ScrollTop from '../components/ScrollTop'
 const AboutUs = () => {
    return(
        <>
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <ScrollTop/>
        </motion.div>   
        </> 
    )
 }

 export default AboutUs;