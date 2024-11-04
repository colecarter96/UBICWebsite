import react from 'react'
import './TeamCard.css'

const TeamCard = ({name, position, img}) => {
    return (
        <div className='team-card'>
            <img src={img} alt="UBIC TEAM IMAGE"></img>
            <h3>{name}</h3>
            <p>{position}</p>
        </div>
    );
};

export default TeamCard;
