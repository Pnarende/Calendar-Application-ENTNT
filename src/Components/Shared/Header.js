import React from 'react';
import { Link } from 'react-router-dom';
import './SharedStyles.css';
import logo from '../../assets/logo1.jpg'; 

const Header = () => {
    return (
        <header className="shared-header">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                <h1>myCalendar</h1>
            </div>
            
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
