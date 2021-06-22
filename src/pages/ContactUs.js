import React from 'react'
import { motion } from 'framer-motion'
import { pageAnimation,titleAnim } from '../animation'
import styled from 'styled-components'
import Wave from '../components/Wave'
import ScrollTop from '../components/ScrollTop'
const ContactUs = () => {
    return(
        <ContactStyle variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <Wave/>
            <Title>
             <Hide>
                 <motion.h2 variants={titleAnim}>
                     Get in touch
                 </motion.h2>
             </Hide>
            </Title>
            <div>
            <Hide>
                <Social variants={titleAnim}>
                    <Circle/>
                        <h2>Send a message on Facebook</h2>
                </Social>
                </Hide>
            <Hide>
                <Social variants={titleAnim}>
                    <Circle/>
                        <h2>Give a Feedback on Gmail</h2>
                </Social>
                </Hide>
            <Hide>
                <Social variants={titleAnim}>
                    <Circle/>
                        <h2>Follow us on Instagram</h2>
                </Social>
                </Hide>
            </div>
    
        <ScrollTop/>
        </ContactStyle>
    )
}
const ContactStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height:90vh;
`
const Title = styled.div`
margin-bottom:4rem;
color: white;
`
const Hide = styled.div`
overflow:hidden;
`
const Circle = styled.div`
border-radius: 50%;
width:3rem;
height:3rem;
background: lightgreen;
`

const Social = styled(motion.div)`
    display:flex;
    align-items: center;
    h2{
        margin:2rem;
        color: white;
    }
    
`
export default ContactUs;