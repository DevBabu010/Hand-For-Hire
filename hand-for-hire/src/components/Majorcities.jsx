import React from 'react'
import './majorcities.css'

import chennai from  "../assets/chennai.webp";
import bangalore from  "../assets/bangalore.webp";
import ahmadabad from  "../assets/ahmadabad.webp";
import hyderabad from  "../assets/hyderabad.webp";
import pune from  "../assets/pune.webp";
import mumbai from  "../assets/mumbai.webp";
import delhi from  "../assets/delhi.webp";
import underline from  "../assets/yellow-underline.svg";




const Majorcities = () => {
    return (
    <div>
        <div className='city-heading'>
        <p>Discover Major Cities</p>
        </div>
        <div><img className='city-underline' src={underline} alt="und" /></div>
        <div className="slider">
            <div className="track">
                <div className="item">
                    <div><img className='city-img' src={chennai} alt="pl" /></div>
                    <div><p className='city-txt'>Chennai</p></div>
                </div>
                <div className="item">
                    <div><img className='city-img' src={delhi} alt="pl" /></div>
                    <div><p className='city-txt'>Delhi</p></div>
                </div>
                <div className="item">
                    <div><img className='city-img' src={mumbai} alt="pl" /></div>
                    <div><p className='city-txt'>Mumbai</p></div>
                </div>
                <div className="item">
                    <div><img className='city-img' src={pune} alt="pl" /></div>
                    <div><p className='city-txt'>Pune</p></div>
                </div>
                <div className="item">
                    <div><img className='city-img' src={hyderabad} alt="pl" /></div>
                    <div><p className='city-txt'>Hyderabad</p></div>
                </div>
                <div className="item">
                    <div><img className='city-img' src={bangalore} alt="pl" /></div>
                    <div><p className='city-txt'>Bangalore</p></div>
                </div>
                <div className="item">
                    <div><img className='city-img' src={ahmadabad} alt="pl" /></div>
                    <div><p className='city-txt'>Ahmadabad</p></div>

                </div>
                
            </div>
        </div>

    </div>
    )
}

export default Majorcities
