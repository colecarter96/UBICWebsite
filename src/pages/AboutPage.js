import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <Header alwaysBackground={true} />
            <div className="content">
                <section className="background-section">
                    <h2>About UBIC</h2>
                    <p>
                        Founded in 2012, the Undergraduate Bioinformatics Club (UBIC) at UCSD is a student-led organization
                        dedicated to fostering a community of students passionate about bioinformatics and computational biology.
                    </p>
                </section>
                

                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p>
                        UBIC aims to provide students with opportunities to explore bioinformatics through workshops, 
                        research presentations, and networking events. We strive to create an inclusive environment where 
                        students can learn, collaborate, and grow in their understanding of this interdisciplinary field.
                    </p>
                </section>

                <section className="values-section">
                    <h2>Our Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <h3>Learning</h3>
                            <p>Continuous education and skill development in bioinformatics</p>
                        </div>
                        <div className="value-card">
                            <h3>Community</h3>
                            <p>Building a supportive network of bioinformatics enthusiasts</p>
                        </div>
                        <div className="value-card">
                            <h3>Innovation</h3>
                            <p>Exploring cutting-edge developments in the field</p>
                        </div>
                        <div className="value-card">
                            <h3>Collaboration</h3>
                            <p>Working together to solve complex biological problems</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage; 