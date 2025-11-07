import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2>Connect with Us</h2>
      <div className="main" style={{ gap: "10rem", padding: "1rem 0rem" }}>
        <div className="main">
          <div className="footer-section">
            <div>
              <a href="mailto:ubic@ucsd.edu">
                <img
                  src="/footer_logos/email_logo.svg"
                  alt="mail_logo"
                  width="40px"
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
                  width="40px"
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
                  width="35px"
                  style={{ marginRight: "13px" }}
                ></img>
                <p>LinkTree</p>
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/bioinformatics_at_ucsd?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr">
                <img
                  src="/footer_logos/insta_logo.svg"
                  alt="insta_logo"
                  width="40px"
                  style={{ filter: "invert(1)" }}
                ></img>
                <p>Instagram</p>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <p>Special Thanks to Our Sponsors</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="http://fanfangroup.com">
              <img src="/footer_logos/fanfan.png" alt="Sponsor 1" />
            </a>
            <a href="https://monocerosbio.com">
              <img src="/footer_logos/monoceros1.png" alt="Sponsor 2" />
            </a>
          </div>
        </div>
      </div>

      <p>© 2025 UBIC at UCSD. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
