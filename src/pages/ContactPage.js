import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page">
            <Header alwaysBackground={true} />
            <div className="content">
                <section className="contact-section">
                    <h2>Get Involved</h2>
                    <p>
                        Join our community of bioinformatics enthusiasts! There are many ways to get involved with UBIC.
                    </p>
                </section>

                <section className="contact-methods">
                    <div className="contact-card">
                        <h3>Email</h3>
                        <p>ubic@ucsd.edu</p>
                        <a href="https://linktr.ee/ubic_ucsd?fbclid=PAZXh0bgNhZW0CMTEAAaZ8faMPmmRAiqd5e_xc-adjjHS-jyhX-_HPNpISt_SmrrhdPoJnG1x2mLY_aem_e2KImZgOMJKHuXiGcvvdkA" target="_blank" rel="noopener noreferrer" className="linktree-link">
                            LinkTree
                        </a>
                    </div>
                    <div className="contact-card">
                        <h3>Discord</h3>
                        <p>Join our Discord server to connect with other members!</p>
                        <a href="https://discord.gg/Dgt4esxQzn" target="_blank" rel="noopener noreferrer" className="discord-link">
                            Join Discord
                        </a>
                    </div>
                    <div className="contact-card">
                        <h3>Instagram</h3>
                        <p>Follow us for updates and event announcements</p>
                        <a href="https://www.instagram.com/ucsd_bioinformatics/?hl=en" target="_blank" rel="noopener noreferrer" className="instagram-link">
                            @ucsd_bioinformatics
                        </a>
                    </div>
                </section>

                <section className="involvement-section">
                    <h2>Ways to Get Involved</h2>
                    <div className="involvement-grid">
                        <div className="involvement-card">
                            <h3>Attend Events</h3>
                            <p>Join our workshops, GBMs, and social events to learn and network</p>
                        </div>
                        <div className="involvement-card">
                            <h3>Join the Team</h3>
                            <p>Apply for a position on our executive board or become a committee member</p>
                        </div>
                        <div className="involvement-card">
                            <h3>Volunteer</h3>
                            <p>Help organize events and contribute to our community</p>
                        </div>
                        <div className="involvement-card">
                            <h3>Newsletter</h3>
                            <p>Subscribe to our newsletter for updates and opportunities</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage; 