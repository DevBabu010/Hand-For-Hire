import React from 'react'
import gemstoneBanner from '../../assets/gemstone-banner.webp';
import './Gemstones.css'

const Gemstones = () => {
    return (
    <div className='gemstones-main-div'>
        <div className='gemstone-banner-div'>
            <img src={gemstoneBanner} alt="" />

        </div>
        
    </div>
    )
}

export default Gemstones
