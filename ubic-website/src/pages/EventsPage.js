import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import EventCardsContainer from '../components/EventCardsContainer';
import { getEvents } from '../eventService'; // Import the function to get events

const EventsPage = () => {
    const [events, setEvents] = useState([]); // State to store fetched events
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const fetchedEvents = await getEvents();
                setEvents(fetchedEvents);
            } catch (err) {
                setError("Failed to fetch events");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []); // Empty dependency array means this effect runs once after the initial render

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    if (error) {
        return <div>{error}</div>; // Error state
    }

    return (
        <div className="events-page">
            <Header />
            <Hero size="small" title='Connect. Innovate. Create. Learn.' />
            <EventCardsContainer events={events} title={"Events this Quarter"} />
            <Footer />
        </div>
    );
};

export default EventsPage;
