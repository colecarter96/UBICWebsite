import React from 'react';
import TeamCard from './TeamCard';
import './TeamCardsContainer.css';

const TeamCardsContainer = ({ members, title, limit }) => {
    const displayedEvents = limit ? members.slice(0, limit) : members;

    return (
        <div className="team-cards-container">
            <h3>{title}</h3>
            <div className="cards-container">
                {displayedEvents.map((member, index) => (
                    <TeamCard key={index} img={member.img} name={member.name} position={member.position} />
                ))}
            </div>
        </div>
    );
};

export default TeamCardsContainer;