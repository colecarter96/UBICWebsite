import React from 'react'
import './TeamCard.css'

const TeamCard = ({name, position, imag}) => {
    return (
        <div className='team-card'>
            {/* <img src={imag} alt={`${name} - ${position}`} loading="lazy"/> */}
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    );
};

export default TeamCard;
