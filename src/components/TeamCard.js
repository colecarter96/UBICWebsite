import React from 'react'
import './TeamCard.css'

const TeamCard = ({name, position, img}) => {
    return (
        <div className='team-card'>
            <img src={img} alt="UBIC TEAM IMAGE" loading="lazy"/>
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    );
};

export default TeamCard;
