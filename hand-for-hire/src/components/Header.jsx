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
        <div className='user-icon-and-hamburger'>
            <div>
                <button className='button-32'>Join</button>
            </div>
            
            <div>
                <i class="fa-solid fa-user"></i>
                <i class="fa-solid fa-house"></i>
            </div>
            <div className='hamburger-menu'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            
        </div>
        



        
    </div>
    )
}

export default Header
