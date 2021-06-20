import React from 'react'
import styled from 'styled-components';
import { About } from '../styles';
const FaqSection = () => {
    return(
        <>
        <Faq>
            <h2>Any Questions <span>Query</span></h2>
        <div className="quesion">
            <h4>How Do I Start vedio editing ?</h4>
            <div className="answer">
                <p>Take a Camera/Mobile start finding best shooting/clicks 
                views.</p>
                <p>use youtube tutorials for basic clearance.</p>
            </div>
            <div className="faq-line"></div>
        </div>
        <div className="quesion">
            <h4>How see our projects ?</h4>
            <div className="answer">
                <p>follow us on social media handle.</p>
                <p>we make a daily post on our recently work/project.</p>
            </div>
            <div className="faq-line"></div>
        </div>
        <div className="quesion">
            <h4>How to Make payment ?</h4>
            <div className="answer">
                <p>We accept all type of payments.</p>
                <p>Cash cards, UPI, RTGS, NEFT, internet banking, etc</p>
            </div>
            <div className="faq-line"></div>
        </div>
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