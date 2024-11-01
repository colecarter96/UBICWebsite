import React from 'react';
import './Footer.css';
import discordImg from './discord.png' 
import fanFanImg from './fanfan.png'
import monocerosImg from './monoceros1.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="main">
                <div className="footer-section">
                    <p>Contact Us</p>
                    <p>ubic@ucsd.edu</p>
                </div>
                <div className="footer-section">
                    <p>Join the Community</p>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <img src={discordImg} alt="Discord" />
                    </a>
                </div>
                <div className="footer-section">
                    <p>Special Thanks to Our Sponsors</p>
                    <img src={fanFanImg} alt="Sponsor 1" />
                    <img src={monocerosImg} alt="Sponsor 2" />
                </div>
            </div>
            
            <p className="copyright">© 2024 UBIC at UCSD. All Rights Reserved</p>
        </footer>
    );
}

export default Footer;