import React from "react";
import "./EventCard.css"; // Create this file for styling if needed

const EventCard = ({ imgsrc, title, description }) => {
  return (
    <div className="event-card">
      <img src={imgsrc} alt={imgsrc} height="150px"></img>
      <div>
        <h2> {title} </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
