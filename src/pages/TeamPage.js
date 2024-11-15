import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import TeamCardsContainer from '../components/TeamCardsContainer';
import './TeamPage.css';

const TeamPage = () => {
  const [positionGroups, setPositionGroups] = useState({});

  useEffect(() => {
    const fetchMembers = async () => {
      const querySnapshot = await getDocs(collection(db, "teamMembers"));
      const membersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      // Define specific ordering for Executive positions
      const executiveOrder = ["President", "VP Internal", "VP External", "VP Finance"];

      // Separate Executive members and sort them by the defined order
      const executiveMembers = membersData
        .filter(member => executiveOrder.includes(member.position))
        .sort((a, b) => executiveOrder.indexOf(a.position) - executiveOrder.indexOf(b.position));

      // Separate non-executive members and group them by position without ordering
      const otherMembers = membersData.filter(member => !executiveOrder.includes(member.position));
      const groupedByPosition = otherMembers.reduce((acc, member) => {
        const position = member.position || "Other"; // Use "Other" for missing positions
        if (!acc[position]) acc[position] = [];
        acc[position].push(member);
        return acc;
      }, {});

      // Combine executive members at the top, followed by other grouped positions
      setPositionGroups({ "Executive": executiveMembers, ...groupedByPosition });
    };

    fetchMembers();
  }, []);

  return (
    <div className='team-page'>
      <Header alwaysBackground={true}/>
      {/* <Hero size="small" title='Meet the Team.' /> */}
      <div className="content">
        {Object.keys(positionGroups).map((position) => (
            <div key={position} className="position-section">
              {/* {position !== "Executive" && <h2>{position}</h2>} */}
              <TeamCardsContainer members={positionGroups[position]} title={position}/>
            </div>
          ))}
      </div>
        
      <Footer />
    </div>
  );
};

export default TeamPage;
