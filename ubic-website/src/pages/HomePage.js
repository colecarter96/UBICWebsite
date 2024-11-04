import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection'
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import EventCardsContainer from '../components/EventCardsContainer';

// Sample data - Replace this with actual data from an API or database
const events = [
    { title: 'Event 1', date: '2024-11-10', description: 'Description for Event 1' },
    { title: 'Event 2', date: '2024-11-15', description: 'Description for Event 2' },
    { title: 'Event 3', date: '2024-11-20', description: 'Description for Event 3' },
    { title: 'Event 4', date: '2024-11-25', description: 'Description for Event 4' },
    { title: 'Event 5', date: '2024-11-30', description: 'Description for Event 5' },
    // Add more events as needed
];

const HomePage = () => {
    // Filter events to get the upcoming 3 events by date
    const upcomingEvents = events
        .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date in ascending order
        .slice(0, 3); // Limit to 3 upcoming events

    return (
        <div className="home-page">
            <Header />
            <Hero size="large" />
            
            <div className='main-content'>
                <AboutSection />
                <div className='events'>
                    <EventCardsContainer events={upcomingEvents} title={"Upcoming Events"} />
                </div>
                <NewsletterSection />  
            </div>
            
             
            <Footer />
        </div>
    );
};

export default HomePage;