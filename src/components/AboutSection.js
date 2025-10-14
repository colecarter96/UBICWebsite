import React from "react";

function AboutSection() {
  return (
    <div>
      <div className="bottom-underline">
        <h1>About Us</h1>
      </div>
      <p className="centered-paragraph">
        Founded in 2012, the Undergraduate Bioinformatics Club (UBIC) at UCSD is
        a student-led organization dedicated to fostering a community of
        students passionate about bioinformatics. UBIC provides a space for
        students to explore their interests, develop leadership skills, and
        engage in research and networking opportunities while also forming
        lasting friendships.
      </p>
      <div style={{ marginTop: "1.5rem" }}>
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
              @bioinformatics_at_ucsd
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
