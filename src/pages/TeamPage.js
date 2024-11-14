import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import TeamCardsContainer from '../components/TeamCardsContainer';

const TeamPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const querySnapshot = await getDocs(collection(db, "teamMembers"));
      const membersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      // Define the specific ordering for Executive positions
      const executiveOrder = ["President", "VP Internal", "VP External", "VP Finance"];

      // Define the ordering of board sections
      const boardSectionOrder = ["Executive", "Internal", "External", "Finance", "Miscellaneous"];

      // Sort members by boardSection order, then by position within "Executive" if applicable
      const sortedMembers = membersData.sort((a, b) => {
        const boardA = boardSectionOrder.indexOf(a.boardSection || "Miscellaneous");
        const boardB = boardSectionOrder.indexOf(b.boardSection || "Miscellaneous");

        if (boardA === boardB && a.boardSection === "Executive") {
          // Sort "Executive" positions based on executiveOrder
          return executiveOrder.indexOf(a.position) - executiveOrder.indexOf(b.position);
        }

        // Otherwise, sort by boardSection order
        return boardA - boardB;
      });

      setMembers(sortedMembers);
    };

    fetchMembers();
  }, []);

  return (
    <div className='team-page'>
      <Header />
      <Hero size="small" title='Meet the Team.' />
      <TeamCardsContainer members={members} />
      <Footer />
    </div>
  );
};

export default TeamPage;

// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase';
// import Header from '../components/Header';
// import Hero from '../components/Hero';
// import Footer from '../components/Footer';
// import TeamCardsContainer from '../components/TeamCardsContainer';

// const TeamPage = () => {
//   const [positionGroups, setPositionGroups] = useState({});

//   useEffect(() => {
//     const fetchMembers = async () => {
//       const querySnapshot = await getDocs(collection(db, "teamMembers"));
//       const membersData = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data()
//       }));

//       // Define specific ordering for Executive positions
//       const executiveOrder = ["President", "VP Internal", "VP External", "VP Finance"];

//       // Separate Executive members and sort them by the defined order
//       const executiveMembers = membersData
//         .filter(member => executiveOrder.includes(member.position))
//         .sort((a, b) => executiveOrder.indexOf(a.position) - executiveOrder.indexOf(b.position));

//       // Separate non-executive members and group them by position without ordering
//       const otherMembers = membersData.filter(member => !executiveOrder.includes(member.position));
//       const groupedByPosition = otherMembers.reduce((acc, member) => {
//         const position = member.position || "Other"; // Use "Other" for missing positions
//         if (!acc[position]) acc[position] = [];
//         acc[position].push(member);
//         return acc;
//       }, {});

//       // Combine executive members at the top, followed by other grouped positions
//       setPositionGroups({ "Executive": executiveMembers, ...groupedByPosition });
//     };

//     fetchMembers();
//   }, []);

//   return (
//     <div className='team-page'>
//       <Header />
//       <Hero size="small" title='Meet the Team.' />
//       {Object.keys(positionGroups).map((position) => (
//         <div key={position} className="position-section">
//           {position !== "Executive" && <h2>{position}</h2>}
//           <TeamCardsContainer members={positionGroups[position]} />
//         </div>
//       ))}
//       <Footer />
//     </div>
//   );
// };

// export default TeamPage;
