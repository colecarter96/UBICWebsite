import React from 'react';
import './Hero.css';
import heroIMG from './sunset-cliff-san-diego.png'
import heroIMG1 from './torrySunset.png'

function Hero() {
    return (
        <section className="hero">
            <img src={heroIMG1} alt="Hero background" className="hero-background" />
            <div className="hero-text">
                <h2>Connect. Innovate. Create. Learn.</h2>
            </div>
        </section>
    );
}

export default Hero;