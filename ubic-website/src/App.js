import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import InstagramEmbedding from './components/InstagramEmbedding';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <AboutSection />
            {/* <InstagramEmbedding /> */}
            <NewsletterSection />
            <Footer />
        </div>
    );
}

export default App;
