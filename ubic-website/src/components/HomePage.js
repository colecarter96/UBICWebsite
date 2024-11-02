import React from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutSection from './AboutSection';
import InstagramEmbedding from './InstagramEmbedding';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';


function HomePage() {
    return (
        <div className="HomePage">
            <Header />
            <Hero size="large"/>
            <AboutSection />
            {/* <InstagramEmbedding /> */}
            <NewsletterSection />
            <Footer />
        </div>

    );
}

export default HomePage;