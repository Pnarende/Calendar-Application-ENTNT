import React from 'react';
import './SharedStyles.css';

const Footer = () => {
    return (
        <footer className="shared-footer">
            <p>&copy; {new Date().getFullYear()} My Application. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
