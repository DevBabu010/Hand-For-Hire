import React from 'react'
import "./Header.css";
import logo from "../assets/hfhLogo.png";

const Header = () => {
    return (
    <div className='headerDiv'>
        <div className='logo'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='logo-text'>
                <p>Hand For Hire</p>
            </div>
        </div>
        <div className='hamburger-menu'>
        <span></span>
        <span></span>
        <span></span>
        </div>
        



        
    </div>
    )
}

export default Header
