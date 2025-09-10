import "./TeamCard.css";

const TeamCard = ({ name, position, img, major, email }) => {
  return (
    <div className="team-card">
      <img src={img} alt={`${name} - ${position}`} loading="lazy" />
      <h3>{name}</h3>
      <p>{position}</p>
      <div className="back-team-card">
        <h2>{major}</h2>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};

export default TeamCard;
