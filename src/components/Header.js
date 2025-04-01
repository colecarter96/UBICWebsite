import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ alwaysBackground }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (alwaysBackground) {
            setIsScrolled(true); // Apply background immediately if alwaysBackground is true
            return;
        }

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [alwaysBackground]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${alwaysBackground ? 'home-fade' : ''}`}>
            <Link to='/' className="myLink">
                <h1>UBIC at UCSD</h1>
            </Link>
            
            <button className="hamburger-menu" onClick={toggleMobileMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    <Link to='/about' className="myLink" onClick={() => setIsMobileMenuOpen(false)}>
                        <li>About</li>
                    </Link>
                    <Link to='/bioinformatics' className="myLink" onClick={() => setIsMobileMenuOpen(false)}>
                        <li>Bioinformatics</li>
                    </Link>
                    <Link to='/events' className="myLink" onClick={() => setIsMobileMenuOpen(false)}>
                        <li>Events</li>
                    </Link>
                    <Link to='/team' className="myLink" onClick={() => setIsMobileMenuOpen(false)}>
                        <li>Team</li>
                    </Link>
                    <Link to='/contact' className="myLink" onClick={() => setIsMobileMenuOpen(false)}>
                        <li>Get Involved</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;