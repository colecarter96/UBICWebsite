import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>UBIC at UCSD</h1>
            <nav>
                <ul>
                    <li>Events</li>
                    <li>About</li>
                    <li>Team</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;