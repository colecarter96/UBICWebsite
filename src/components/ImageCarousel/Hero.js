import React from "react";
import "./Hero.css";

const Hero = ({ size, title }) => {
  return (
    <section className={`hero${size}`}>
      <img
        src="/UBIC_GBM.jpg"
        alt="Hero background"
        className="hero-background"
      />
      <div className="hero-text">
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default Hero;
