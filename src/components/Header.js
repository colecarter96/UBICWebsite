import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ alwaysBackground }) {
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${alwaysBackground ? 'home-fade' : ''}`}>
            <Link to='/' className="myLink">
                <h1>UBIC at UCSD</h1>
            </Link>
            
            <nav>
                <ul>
                    <Link to='/events' className="myLink">
                        <li>Events</li>
                    </Link>
                    <Link to='/team' className="myLink">
                        <li>Team</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;