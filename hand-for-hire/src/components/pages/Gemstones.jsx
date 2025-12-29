import React from 'react'
import gemstoneBanner from '../../assets/gemstone-banner.webp';
import './Gemstones.css'
import Gemconsult from '../../assets/gem-consultation.webp'

const Gemstones = () => {
    return (
    <div className='gemstones-main-div'>
        <div className='gemstone-banner-div'>
            <img src={gemstoneBanner} alt="" />

        </div>
        <div className='gemstone-about'>
            <div>
            <p className='gu-heading'>Gemstones & You</p>
            <p className='gu-para'>Through the sacred lens of Vedic astrology, we come to realize that the divine rhythms of the universe are deeply intertwined with the celestial movements of the planets.</p>
            <p className='gu-para'>These sacred planets—the radiant Sun, gentle Moon, fiery Mars, wise Jupiter, graceful Venus, swift Mercury, and steadfast Saturn—along with the mystical shadow forces Rahu and Ketu, guide the course of our earthly journey.</p>
            <p className='gu-para'>Gemstones, created by divine will over countless ages, are imbued with the pure energies of these cosmic beings. As sacred vessels of planetary grace, they help harmonize and align our lives with the blessings of the universe, offering protection, strength, and spiritual upliftment.</p>
        
            </div>

            <div>
                <img src= {Gemconsult} alt="gms" />
            </div>
        </div>
        
    </div>
    )
}

export default Gemstones
