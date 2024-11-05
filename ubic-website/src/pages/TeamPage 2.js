import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


const TeamPage = () => {
    return (
        <div className='team-page'>
            <Header />
            <Hero size="small"/>

            <Footer />
        </div>
    );
};

export default TeamPage;