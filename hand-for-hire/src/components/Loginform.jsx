import React from 'react'
import "./Loginform.css";

const Loginform = ({ onClose }) => {
    return (
    <div className="modal-overlay">
        <div className="modal-box">
        <span className="close-btn" onClick={onClose}>✖</span>

        <h2>Login</h2>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Login</button>
        </div>
    </div>
    );
};

export default Loginform;
