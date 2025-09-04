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
        students passionate about bioinformatics and computational biology. This
        is a place for students who are interested in bioinformatics to spread
        their wings. From research, leadership, and networking opportunities to
        building friendships that will last a lifetime, this is your place to
        grow!
      </p>
      <div className="innerContact">
        <a
          href="https://linktr.ee/ubic_ucsd?fbclid=PAZXh0bgNhZW0CMTEAAaZ8faMPmmRAiqd5e_xc-adjjHS-jyhX-_HPNpISt_SmrrhdPoJnG1x2mLY_aem_e2KImZgOMJKHuXiGcvvdkA"
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
          <p>Contact us at ubic@ucsd.edu</p>
          <div className="innerContact">
            <img src="/mail_black.svg" alt="mail_logo" height="40px"></img>
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
          <p>Join our Discord server to connect with other members!</p>
          <div className="innerContact">
            <img
              src="/discord_black.svg"
              alt="discord_logo"
              height="40px"
            ></img>
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
          <p>Follow us for updates and event announcements</p>
          <div className="innerContact">
            <img
              src="/instagram_black.svg"
              alt="insta_logo"
              height="40px"
            ></img>
            <a
              href="https://www.instagram.com/ucsd_bioinformatics/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              @ucsd_bioinformatics
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
