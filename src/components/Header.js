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
      <Link to="/" style={{ margin: "0", position: "relative", top: "5px" }}>
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
              <li>About</li>
            </a>
          </li>
          <li>
            <a
              href="#events"
              className={activeSection === "events" ? "active" : "myLink"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <li>Events</li>
            </a>
          </li>
          <li>
            <Link
              to="/merch"
              className="myLink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <li>Merch</li>
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="myLink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <li>Resources</li>
            </Link>
          </li>
          <li>
            <a
              href="/faq"
              className={activeSection === "faq" ? "active" : "myLink"}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <li>FAQ</li>
            </a>
          </li>
          <li>
            <Link
              to="/team"
              className="myLink"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <li>Team</li>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
