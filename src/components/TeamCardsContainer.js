import TeamCard from "./TeamCard";
import "./TeamCardsContainer.css";

const TeamCardsContainer = ({ members, title, limit }) => {
  const displayedEvents = limit ? members.slice(0, limit) : members;

  return (
    <div className="team-cards-container">
      <h3>{title}</h3>
      <div className="cards-container">
        {displayedEvents.map((member, index) => (
          <TeamCard
            key={index}
            img={
              "/team_photos/" + member.name + ".jpg"
            } /* Img path is public/team_photos/Firstname Lastname.jpg */
            name={member.name}
            position={member.position}
            major={member.major}
            email={member.email}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCardsContainer;
