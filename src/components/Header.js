import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
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