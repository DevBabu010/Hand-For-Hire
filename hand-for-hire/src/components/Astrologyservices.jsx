import React from 'react'
import './Astrologyservices.css'
import { Link } from "react-router-dom";

import underline from  "../assets/yellow-underline.svg";
import emerald from "../assets/emerald.webp"
import ruby from "../assets/ruby.webp"
import marriage from "../assets/marriage.webp"
import horo from "../assets/horo.webp"
import career from "../assets/career.webp"
import astro from "../assets/astro.jpg"
import astroall from "../assets/astro-all.jpg"

const Astrologyservices = () => {
    return (
    <div className='astro-container'>
        <div className='astro-heading'>
            <div className='astro-header'><p>Astrology Services</p></div>
            <div className='astro-underline'><img src={underline} alt="und" /></div>
            
        </div>
        <div className='astro-body'>
            <div className='new-tag-div'>
                <div>
                    <Link to = "/gemstones">
                    <img className='astro-body-img' src={emerald} alt="pl" />
                    </Link>
                    
                </div>
                <div><p className='astro-body-txt'>Buy Gemstones</p></div>
                <button className='newtag'>New</button>
            </div>
            <div>
                <a href="https://www.horoscope.com/us/index.aspx">
                    <div><img className='astro-body-img' src={horo} alt="pl" /></div>
                
                    <div><p className='astro-body-txt'>Horoscope</p></div>
                </a>
            
            </div>
            <div>

                <div><img className='astro-body-img' src={career} alt="pl" /></div>
                <div><p className='astro-body-txt'>Career Services</p></div>
            </div>
            <div>

                <div><img className='astro-body-img' src={marriage} alt="pl" /></div>
                <div><p className='astro-body-txt'>Marriage Services</p></div>
            </div>
            <div>

                <div><img className='astro-body-img' src={astro} alt="pl" /></div>
                <div><p className='astro-body-txt'>Talk to an Astrologer</p></div>
            </div>
            <div>
                <div className='img-container'>
                    <img className='astro-body-img-wt' src={astroall} alt="pl"/>     
                    <p className='astro-body-txt-wt'>View All Services</p>
                </div>
                <div className='astro-body-txt'><p>All Services</p></div>
            </div>

        </div>

        
    </div>
    )
}

export default Astrologyservices
