import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import EventCard from './EventCard';

const EventsPage = () => {
    // Sample event data (you can replace this with real data from an API or database)
    const events = [
        { title: 'Event 1', date: '2024-11-10', description: 'Description for Event 1' },
        { title: 'Event 2', date: '2024-11-15', description: 'Description for Event 2' },
        { title: 'Event 3', date: '2024-11-20', description: 'Description for Event 3' },
        // Add more events as needed
    ];

    return (
        <div className="events-page">
            <Header />
            <Hero />

            <h1>Upcoming Events</h1>
            <div className="event-cards-container">
                {events.map((event, index) => (
                    <EventCard key={index} title={event.title} date={event.date} description={event.description} />
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default EventsPage;