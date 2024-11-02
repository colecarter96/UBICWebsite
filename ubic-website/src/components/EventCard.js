import React from 'react';
import './EventCard.css'; // Create this file for styling if needed

const EventCard = ({ title, date, description }) => {
    return (
        <div className="event-card">
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    );
};

export default EventCard;