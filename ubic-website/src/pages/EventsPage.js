import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import './EventsPage.css';
import EventCardsContainer from '../components/EventCardsContainer';

const EventsPage = () => {
    // Sample event data (you can replace this with real data from an API or database)
    const events = [
        { title: 'Event 1', date: '2024-11-10', description: 'Description for Event 1' },
        { title: 'Event 2', date: '2024-11-15', description: 'Description for Event 2' },
        { title: 'Event 3', date: '2024-11-20', description: 'Description for Event 3' },
        { title: 'Event 3', date: '2024-11-20', description: 'Description for Event 3' },
        { title: 'Event 3', date: '2024-11-20', description: 'Description for Event 3' },
        { title: 'Event 3', date: '2024-11-20', description: 'Description for Event 3' },
        { title: 'Event 3', date: '2024-11-20', description: 'Description for Event 3' },
        { title: 'Event 3', date: '2024-11-20', description: 'Description for Event 3' },
        { title: 'Event 3', date: '2024-11-20', description: 'Description for Event 3' },
        
        // Add more events as needed
    ];

    return (
        <div className="events-page">
            <Header />
            <Hero size="small" title='Connect. Innovate. Create. Learn.'/>
            <EventCardsContainer events={events} title={"Events this Quarter"}/>

            <Footer />
        </div>
    );
};


export default EventsPage;