import React from 'react';
import './Footer.css';


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
                    <a href="https://discord.gg/Dgt4esxQzn" target="_blank" rel="noopener noreferrer">
                        <img src='/discord.png' alt="Discord" />
                    </a>
                </div>
                <div className="footer-section">
                    <p>Special Thanks to Our Sponsors</p>
                    <img src='/fanfan.png' alt="Sponsor 1" />
                    <img src='/monoceros1.png' alt="Sponsor 2" />
                </div>
            </div>
            
            <p className="copyright">© 2024 UBIC at UCSD. All Rights Reserved</p>
        </footer>
    );
}

export default Footer;