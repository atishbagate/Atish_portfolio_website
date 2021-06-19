import React from 'react'
//import icons 
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png'
const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>Quality</span> services.</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                        <img src={clock} alt="clock"/>
                        <h3>Efficient</h3>
                        <p>We are efficient in working field.</p>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="icon">
                        <img src={teamwork} alt="teamwork"/>
                        <h3>Teamwork</h3>
                        <p>We are good co-ordinating team.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon">
                        <img src={diaphragm} alt="diaphragm"/>
                        <h3>Diaphragm</h3>
                        <p>good Productive and responsive staff.</p>
                        </div> 
                    </div>

                    <div className="card">
                        <div className="icon">
                        <img src={money} alt="money"/>
                        <h3>Efficient</h3>
                        <p>We value your money and service will be worth it.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="homepage" />
            </div>
        </div>
    )
}
export default ServicesSection;
