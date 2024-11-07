// EventCardsContainer.js
import React from 'react';
import EventCard from './EventCard';
import './EventCardsContainer.css'

const EventCardsContainer = ({ events, title, limit }) => {
    // Limit the number of events if the `limit` prop is provided
    const displayedEvents = limit ? events.slice(0, limit) : events;

    return (
        <div className="event-cards-container">
            <h3>{title}</h3>
            <div className='cards-container'>
                {displayedEvents.map((event, index) => (
                    <EventCard key={index} title={event.title} date={event.date} description={event.description} />
                ))}
            </div>
            
            
        </div>
    );
};

export default EventCardsContainer;