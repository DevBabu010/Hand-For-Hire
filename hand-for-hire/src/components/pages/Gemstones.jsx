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
            <div className='Blank-div'></div>
            <div>
            <p className='gu-heading'>Gemstones & You</p>
            <p className='gu-para'>Through the sacred lens of Vedic astrology, we come to realize that the divine rhythms of the universe are deeply intertwined with the celestial movements of the planets.</p>
            <p className='gu-para'>These sacred planets—the radiant Sun, gentle Moon, fiery Mars, wise Jupiter, graceful Venus, swift Mercury, and steadfast Saturn—along with the mystical shadow forces Rahu and Ketu, guide the course of our earthly journey.</p>
            <p className='gu-para'>Gemstones, created by divine will over countless ages, are imbued with the pure energies of these cosmic beings. As sacred vessels of planetary grace, they help harmonize and align our lives with the blessings of the universe, offering protection, strength, and spiritual upliftment.</p>       
            </div>

            <div>
                <img src= {Gemconsult} alt="gms" />
            </div>
            <div className='Blank-div'></div>
        </div>

        <div className="gem-products-div">
            <div className="gem-products-heading">
                <p>GEMSTONES COLLECTION</p>
                <img src="divider.png" alt="dv" />
            </div>
            <div className="gem-products">
                <div className="product">
                    <div className='product-image'>
                        <img src="/Pukhraj.webp" alt="p" />
                    </div>
                    <div className='product-name'>
                        <p>Pukhraj</p>
                    </div>
                    <div className='rating'>
                        <p>⭐4.5  |  435 Ratings</p>
                    </div>
                    <div className='Price'>
                        <p>Price : ₹9999</p>
                    </div>
                    <span class="hover-text">For financial security</span>
                    
                </div>
                <div className="product">
                    <div className='product-image'>
                        <img src="/Emerald.webp" alt="p" />
                    </div>
                    <div className='product-name'>
                        <p>Emerald</p>
                    </div>
                    <div className='rating'>
                        <p>⭐4.9  |  335 Ratings</p>

                    </div>
                    <div className='Price'>
                        <p>Price : ₹8299</p>
                    </div>
                    <span class="hover-text">💍 For Wealth</span>

                </div>
                <div className="product">
                    <div className='product-image'>
                        <img src="/Ruby.webp" alt="p" />
                    </div>
                    <div className='product-name'>
                        <p>Ruby</p>
                    </div>
                    <div className='rating'>
                        <p>⭐4.1  |  735 Ratings</p>

                    </div>
                    <div className='Price'>
                        <p>Price : ₹89899</p>
                    </div>
                    <span class="hover-text">💍 For Calmness</span>

                </div>
                <div className="product">
                    <div className='product-image'>
                        <img src="/neelam.webp" alt="p" />
                    </div>
                    <div className='product-name'>
                        <p>Neelam</p>
                    </div>
                    <div className='rating'>
                        <p>⭐3.9  |  390 Ratings</p>

                    </div>
                    <div className='Price'>
                        <p>Price : ₹89999</p>
                    </div>
                </div>
                <div className="product">
                    <div className='product-image'>
                        <img src="/Hessonite.webp" alt="p" />
                    </div>
                    <div className='product-name'>
                        <p>Hessonite</p>
                    </div>
                    <div className='rating'>
                        <p>⭐4.2  |  392 Ratings</p>

                    </div>
                    <div className='Price'>
                        <p>Price : ₹45299</p>
                    </div>                   
                </div>
                <div className="product">
                    <div className='product-image'>
                        <img src="/Citrine.webp" alt="p" />
                    </div>
                    <div className='product-name'>
                        <p>Citrine</p>
                    </div>
                    <div className='rating'>
                        <p>⭐4.3  |  634 Ratings</p>

                    </div>
                    <div className='Price'>
                        <p>Price : ₹19099</p>
                    </div>
                </div>
                <div className="product">
                    <div className='product-image'>
                        <img src="/Turquoise.webp" alt="p" />
                    </div>
                    <div className='product-name'>
                        <p>Turquoise</p>
                    </div>
                    <div className='rating'>
                        <p>⭐4.6  |  097 Ratings</p>

                    </div>
                    <div className='Price'>
                        <p>Price : ₹2999</p>
                    </div>
                </div>
                <div className="product">
                    <div className='product-image'>
                        <img src="/Blue-Topaz.webp" alt="p" />
                    </div>
                    <div className='product-name'>
                        <p>Blue-Topaz</p>
                    </div>
                    <div className='rating'>
                        <p>⭐4.7  |  105 Ratings</p>

                    </div>
                    <div className='Price'>
                        <p>Price : ₹2099</p>
                    </div>
                </div>
                <div className="product">
                    <div className='product-image'>
                        <img src="/African-Ruby.webp" alt="p" />
                    </div>
                    <div className='product-name'>
                        <p>African-Ruby</p>
                    </div>
                    <div className='rating'>
                        <p>⭐3.6  |  46 Ratings</p>

                    </div>
                    <div className='Price'>
                        <p>Price : ₹3299</p>
                    </div>
                </div>
                <div className="product">
                    <div className='product-image'>
                        <img src="/Zambian-Emerald.webp" alt="p" />
                    </div>
                    <div className='product-name'>
                        <p>Zambian-Emerald</p>
                    </div>
                    <div className='rating'>
                        <p>⭐3.6  |  46 Ratings</p>

                    </div>
                    <div className='Price'>
                        <p>Price : ₹2999</p>
                    </div>
                </div>
                <div className="product">
                    <div className='product-image'>
                        <img src="/Peetambari-Neelam.webp" alt="p" />
                    </div>
                    <div className='product-name'>
                        <p>Peetambari-Neelam.</p>
                    </div>
                    <div className='rating'>
                        <p>⭐3.9  |  416 Ratings</p>

                    </div>
                    <div className='Price'>
                        <p>Price : ₹2899</p>
                    </div>
                </div>

                <div className="product">
                    <div className='product-image'>
                        <img src="/black-gold.png" alt="p" />
                    </div>
                    <div className='product-name'>
                        <p>Black Gold</p>
                    </div>
                    <div className='rating'>
                        <p>⭐3.8  |  432 Ratings</p>

                    </div>
                    <div className='Price'>
                        <p>Price : ₹99999</p>
                    </div>
                </div>

                




                
            </div>

        </div>
        
    </div>
    )
}

export default Gemstones
