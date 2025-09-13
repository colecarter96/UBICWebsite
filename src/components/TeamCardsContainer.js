import TeamCard from "./TeamCard";
import "./TeamCardsContainer.css";

const TeamCardsContainer = ({ members, title, limit }) => {
  const displayedMembers = limit ? members.slice(0, limit) : members;

  // Determine if current section has a single member
  //   const isSingleMember = displayedMembers.length === 1;

  return (
    <div className="team-cards-container">
      <h3>{title}</h3>
      <div className="cards-container">
        {displayedMembers.map((member, index) => (
          <TeamCard
            key={index}
            img={
              "/team_photos/" + member.name + ".jpg"
            } /* Img path is public/team_photos/Firstname Lastname.jpg */
            name={member.name}
            position={member.position}
            major={member.major}
            year={member.year}
            email={member.email}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCardsContainer;
