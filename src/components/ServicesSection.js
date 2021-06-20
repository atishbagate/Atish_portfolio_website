import React from 'react'
//import icons 
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png'

import { About,Description,Image } from '../styles';
import styled from 'styled-components';
const ServicesSection = () => {
    return (
        <Services>
            <Description>
                <h2>High <span>Quality</span> services.</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                        <img src={clock} alt="clock"/>
                        <h3>Efficient</h3>
                        <p>We are efficient in working field.</p>
                        </div>
                    </Card>
                    
                    <Card>
                        <div className="icon">
                        <img src={teamwork} alt="teamwork"/>
                        <h3>Teamwork</h3>
                        <p>We are good co-ordinating team.</p>
                        </div>
                    </Card>

                    <Card>
                        <div className="icon">
                        <img src={diaphragm} alt="diaphragm"/>
                        <h3>Diaphragm</h3>
                        <p>good Productive and responsive staff.</p>
                        </div> 
                    </Card>

                    <Card>
                        <div className="icon">
                        <img src={money} alt="money"/>
                        <h3>Efficient</h3>
                        <p>We value your money and service will be worth it.</p>
                        </div>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="homepage" />
            </Image>
        </Services>
    )
}

const Services = styled(About)`
h2 {
    padding-bottom: 5rem;
}
p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;
const Cards = styled.div`
display : flex;
flex-wrap:wrap;
`;
const Card = styled.div`
flex-basis: 20rem;
flex-wrap: wrap;
.icon{
    display: flex;
    align-items:center;
    flex-wrap: wrap;
}
h3{
    margin-left:1rem;
    margin-right:1rem;
    background:white;
    color:black;
    padding:0.7rem;
}
`

export default ServicesSection;
