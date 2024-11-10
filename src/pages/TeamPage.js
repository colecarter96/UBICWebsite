import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import TeamCardsContainer from '../components/TeamCardsContainer';


const TeamPage = () => {

    const members = [
        { img: '/discord.png', name: 'John Doe', position: 'Position' },
        { img: '/discord.png', name: 'John Doe', position: 'Position' },
        { img: '/discord.png', name: 'John Doe', position: 'Position' },
        { img: '/discord.png', name: 'John Doe', position: 'Position' },
        { img: '/discord.png', name: 'John Doe', position: 'Position' },
    ];

    return (
        <div className='team-page'>
            <Header />
            <Hero size="small" title='Meet the Team.'/>
            <TeamCardsContainer members={members} title={"Executive Board"} limit={4}/>
            <Footer />
        </div>
    );
};

export default TeamPage;