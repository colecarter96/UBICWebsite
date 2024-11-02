import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <h1>UBIC at UCSD</h1>
            <nav>
                <ul>
                    <Link to='/events' className="myLink">
                        <li>Events</li>
                    </Link>
                    <li>About</li>
                    <li>Team</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;