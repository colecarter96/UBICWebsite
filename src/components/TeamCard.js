import "./TeamCard.css";

const TeamCard = ({ name, position, img, major, year, email }) => {
  return (
    <div className="team-card">
      <img src={img} alt={`${name}_photo`} loading="lazy" />
      <div className="div-center">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
      <div className="back-team-card">
        <h2>{`${major} ${year}`}</h2>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};

export default TeamCard;
