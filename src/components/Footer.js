import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>Connect with Us</h2>
      <div className="main">
        <div className="footer-section">
          <div>
            <a href="mailto:ubic@ucsd.edu">
              <img
                src="/footer_logos/email_logo.svg"
                alt="mail_logo"
                height="40px"
                style={{ filter: "invert(1)" }}
              ></img>
              <p>Email</p>
            </a>
          </div>
          <div>
            <a href="https://discord.gg/Dgt4esxQzn">
              <img
                src="/footer_logos/discord_logo.svg"
                alt="discord_logo"
                height="40px"
                style={{ filter: "invert(1)" }}
              ></img>
              <p>Discord</p>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <div>
            <a href="https://linktr.ee/ubic_ucsd?fbclid=PAZXh0bgNhZW0CMTEAAaZ8faMPmmRAiqd5e_xc-adjjHS-jyhX-_HPNpISt_SmrrhdPoJnG1x2mLY_aem_e2KImZgOMJKHuXiGcvvdkA">
              <img
                src="/linktree_white.svg"
                alt="contact_logo"
                height="35px"
              ></img>
              <p>LinkTree</p>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/bioinformatics_at_ucsd?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr">
              <img
                src="/footer_logos/insta_logo.svg"
                alt="insta_logo"
                height="40px"
                style={{ filter: "invert(1)" }}
              ></img>
              <p>Instagram</p>
            </a>
          </div>
        </div>
        <div className="footer-section">
          <p>Special Thanks to Our Sponsors</p>
          <img src="/footer_logos/fanfan.png" alt="Sponsor 1" />
          <img src="/footer_logos/monoceros1.png" alt="Sponsor 2" />
        </div>
      </div>
      <p>© 2025 UBIC at UCSD. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;

{
  /* <div style={{ marginTop: "1.5rem" }}>
        <a
          href="https://linktr.ee/UBIC_at_UCSD"
          target="_blank"
          rel="noopener noreferrer"
          className="join-button"
        >
          Join Us
          <img src="/linktree_white.svg" alt="contact_logo" height="35px"></img>
        </a>
      </div>
      <section className="contact-methods">
        <div className="contact-card">
          <h3>Email</h3>
          <p>
            Have any questions or want to get involved? Contact us at
            ubic@ucsd.edu.
          </p>
          <div className="innerContact">
            <a href="mailto:ubic@ucsd.edu">
              <img src="/mail_black.svg" alt="mail_logo" height="40px"></img>
            </a>
            <a
              href="mailto:ubic@ucsd.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              ubic@ucsd.edu
            </a>
          </div>
        </div>
        <div className="contact-card">
          <h3>Discord</h3>
          <p>
            Join our Discord to connect with other members and stay updated on
            opportunities!
          </p>
          <div className="innerContact">
            <a href="https://discord.gg/Dgt4esxQzn">
              <img
                src="/discord_black.svg"
                alt="discord_logo"
                height="40px"
              ></img>
            </a>

            <a
              href="https://discord.gg/Dgt4esxQzn"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Join Discord
            </a>
          </div>
        </div>
        <div className="contact-card">
          <h3>Instagram</h3>
          <p>
            Follow us for news updates, Instagram Takeovers, and event
            announcements.
          </p>
          <div className="innerContact">
            <a href="https://www.instagram.com/bioinformatics_at_ucsd?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr">
              <img
                src="/instagram_black.svg"
                alt="insta_logo"
                height="40px"
              ></img>
            </a>
            <a
              href="https://www.instagram.com/bioinformatics_at_ucsd?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              @ucsd_bioinformatics
            </a>
          </div> */
}
