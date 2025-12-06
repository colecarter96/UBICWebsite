import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ alwaysBackground, activeSection }) {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysBackground]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`header ${isScrolled ? "scrolled" : ""} ${
        alwaysBackground ? "home-fade" : ""
      }`}
    >
      <Link
        to="/"
        style={{
          margin: "0",
          position: "relative",
          top: "0.4rem",
          left: "4rem",
        }}
      >
        <img src="/ubicLogo.png" alt="logo" width="120px"></img>
      </Link>

      <button className="hamburger-menu" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : "myLink"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#events"
              className={activeSection === "events" ? "active" : "myLink"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#merch"
              className={activeSection === "merch" ? "active" : "myLink"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Merch
            </a>
          </li>
          <li>
            <a
              href="#resources"
              className={activeSection === "resources" ? "active" : "myLink"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className={activeSection === "faq" ? "active" : "myLink"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#team"
              className={activeSection === "team" ? "active" : "myLink"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
