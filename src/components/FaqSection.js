import React from 'react'

const FaqSection = () => {
    return(
        <>
        <div className="faq">
            <h2>Any Questions <span>Query</span></h2>
        </div>
        <div className="quesion">
            <h4>How Do I Start vedio editing ?</h4>
            <div className="answer">
                <p>Take a Camera/Mobile start finding best shooting/clicks 
                views.</p>
                <p>use youtube tutorials for basic clearance.</p>
            </div>
        </div>
        <div className="quesion">
            <h4>How see our projects ?</h4>
            <div className="answer">
                <p>follow us on social media handle.</p>
                <p>we make a daily post on our recently work/project.</p>
            </div>
        </div>
        <div className="quesion">
            <h4>How to Make payment ?</h4>
            <div className="answer">
                <p>We accept all type of payments.</p>
                <p>Cash cards, UPI, RTGS, NEFT, internet banking, etc</p>
            </div>
        </div>
        
        </>
    )
}

export default FaqSection; 