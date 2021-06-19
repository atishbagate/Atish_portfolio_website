import React from 'react'
import home1 from '../img/home1.png'
import styled from 'styled-components'
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

//styld comonents 
const About = styled.div`
min-height: 90vh;
display: flex;
align-items: center;
justify-content: center;
padding: 5rem 1rem;
color: white;
padding-left: 71px;
`;
const Description = styled.div`
flex: 1;
padding-right: 3rem;
h2{
    font-weight:lighter;
}
`;
const Image = styled.div`
flex:0.7;
overflow: hidden;
img{
    width: 92%;
    height: 85vh;
    object-fit: cover;
}
`;
const Hide = styled.div`
overflow: hidden;
`;

export default AboutSection;