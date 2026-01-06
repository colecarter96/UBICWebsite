import "./EventCard.css"; // Create this file for styling if needed

const EventCard = ({ imgsrc, title, description }) => {
  return (
    <div className="event-card">
      <img className="event-img" src={imgsrc} alt={imgsrc} />
      <h3> {title} </h3>
      <p>{description}</p>
    </div>
  );
};

export default EventCard;
