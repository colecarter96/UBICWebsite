import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BioinformaticsPage.css';

const BioinformaticsPage = () => {
    return (
        <div className="bioinformatics-page">
            <Header alwaysBackground={true} />
            <div className="content">
                <section className="intro-section">
                    <h2>What is Bioinformatics?</h2>
                    <p>
                        Bioinformatics is an interdisciplinary field that combines biology, computer science, 
                        mathematics, and statistics to analyze and interpret biological data. It plays a crucial 
                        role in understanding complex biological systems and advancing medical research.
                    </p>
                </section>

                <section className="applications-section">
                    <h2>Applications</h2>
                    <div className="applications-grid">
                        <div className="application-card">
                            <h3>Genomics</h3>
                            <p>Analysis of DNA sequences and genetic information</p>
                        </div>
                        <div className="application-card">
                            <h3>Proteomics</h3>
                            <p>Study of protein structure and function</p>
                        </div>
                        <div className="application-card">
                            <h3>Drug Discovery</h3>
                            <p>Computer-aided drug design and development</p>
                        </div>
                        <div className="application-card">
                            <h3>Disease Research</h3>
                            <p>Understanding disease mechanisms and treatments</p>
                        </div>
                        <div className="application-card">
                            <h3>Other Biotech</h3>
                            <p>Biotech applications of bioinformatics</p>
                        </div>
                        <div className="application-card">
                            <h3>Data Visualization</h3>
                            <p>Graphing and displaying bioinformatics data</p>
                        </div>
                    </div>
                </section>

                <section className="skills-section">
                    <h2>Key Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-card">
                            <h3>Programming</h3>
                            <p>Python, R, C++, and other programming languages</p>
                        </div>
                        <div className="skill-card">
                            <h3>Data Analysis</h3>
                            <p>Statistical analysis and visualization</p>
                        </div>
                        <div className="skill-card">
                            <h3>Biology</h3>
                            <p>Understanding biological systems</p>
                        </div>
                        <div className="skill-card">
                            <h3>Machine Learning</h3>
                            <p>AI and predictive modeling</p>
                        </div>
                    </div>
                </section>

                
            </div>
            <Footer />
        </div>
    );
};

export default BioinformaticsPage; 