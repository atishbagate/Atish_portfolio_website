import React from 'react'
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { motion,AnimateSharedLayout } from 'framer-motion'
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';
const FaqSection = () => {
    const [element,controls] = useScroll();
    return(
        <>
        <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <h2>Any Questions <span>Query</span></h2>
        <AnimateSharedLayout>
        <Toggle title='How Do I Start vedio editing ?'>
        <div className="quesion">
            <div className="answer">
                <p>Take a Camera/Mobile start finding best shooting/clicks views.</p>
                <p>use youtube tutorials for basic clearance.</p>
            </div>
        </div>
        </Toggle>
        <Toggle title='How see our projects ?'> 
        <div className="quesion">
            <div className="answer">
                <p>follow us on social media handle.</p>
                <p>we make a daily post on our recently work/project.</p>
            </div>
        </div>
        </Toggle>
        <Toggle title='How to Make payment ?'>
        <div className="quesion">
            <div className="answer">
                <p>We accept all type of payments.</p>
                <p>Cash cards, UPI, RTGS, NEFT, internet banking, etc</p>
            </div>
        </div>
        </Toggle>
        </AnimateSharedLayout>
        </Faq>
        </>
    )
}
const Faq = styled(About)`
    display: block;
    span {
    display: block;
    }
    h2{
    padding-bottom:2rem;
    color:white;
    font-weight:lighter;
    }
    .faq-line{
        background:  #cccc;
        height:0.2rem;
        margin: 2rem 0rem;
        width:100%;
    }
    .question{
        padding:3rem 0rem;
        cursor:pointer;
    }
    .answer{
        padding:2rem 0rem;
    p{
        padding:1rem 0rem;
    }
    }

`;

export default FaqSection; 