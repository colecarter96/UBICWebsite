import { useRef, useEffect, useState } from "react";
import { collection, doc, getDocs, addDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import Carousel from "../components/ImageCarousel/Slider";
import EventCard from "../components/EventCard";
import TeamCardsContainer from "../components/TeamCardsContainer";
import Footer from "../components/Footer";
import "./HomePage.css";

// Sample data - Replace this with actual data from an API or database
// const events = [
//     { title: 'Event 1', date: '2024-11-10', description: 'Description for Event 1' },
//     { title: 'Event 2', date: '2024-11-15', description: 'Description for Event 2' },
//     { title: 'Event 3', date: '2024-11-20', description: 'Description for Event 3' },
//     { title: 'Event 4', date: '2024-11-25', description: 'Description for Event 4' },
//     { title: 'Event 5', date: '2024-11-30', description: 'Description for Event 5' },
//     // Add more events as needed
// ];

const HomePage = () => {
  // Filter events to get the upcoming 3 events by date
  // const upcomingEvents = events
  //     .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date in ascending order
  //     .slice(0, 3); // Limit to 3 upcoming events

  // Bioinformatics Section Open/Closed
  const [openBioinformatics, toggleBioinformatics] = useState(false);

  // Observers for section scrolled down to
  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const merchRef = useRef(null);
  const resourcesRef = useRef(null);
  const faqRef = useRef(null);
  const teamRef = useRef(null);
  const [activeSection, setActiveSection] = useState("");
  // Lazy Load for Team
  const [teamLoaded, setTeamLoaded] = useState(false);
  const [positionGroups, setPositionGroups] = useState({});

  const fetchMembers = async () => {
    let membersData;
    try {
      const querySnapshot = await getDocs(collection(db, "teamMembers"));
      membersData = querySnapshot.docs.map((collection) => ({
        id: collection.id,
        ...collection.data(),
      }));
    } catch (error) {
      if (error.name === "AbortError") {
        // If Fetch was aborted
        console.log("Fetch aborted");
      } else {
        console.error(error);
      }
    }

    // Define specific ordering for Executive positions
    const executiveOrder = [
      "President",
      "VP Internal",
      "VP External",
      "VP Finance",
    ];

    // Separate Executive members and sort them by the defined order
    const executiveMembers = membersData
      .filter((member) => executiveOrder.includes(member.position))
      .sort(
        (a, b) =>
          executiveOrder.indexOf(a.position) -
          executiveOrder.indexOf(b.position)
      );

    // Separate non-executive members and group them by position without ordering
    const otherMembers = membersData.filter(
      (member) => !executiveOrder.includes(member.position)
    );
    const groupedByPosition = otherMembers.reduce((acc, member) => {
      const position = member.boardSection || "Other"; // Use "Other" for missing positions
      if (!acc[position]) acc[position] = [];
      acc[position].push(member);
      return acc;
    }, {});
    const sortedEntries = Object.entries(groupedByPosition).sort(
      (a, b) => a[1].length - b[1].length
    ); // Sort by smallest number of members in board section
    // Convert it back into an object (optional)
    const sortedGroupedByPosition = Object.fromEntries(sortedEntries);

    // Combine executive members at the top, followed by other grouped positions
    setPositionGroups({
      "Executive Board": executiveMembers,
      ...sortedGroupedByPosition,
    });
    setTeamLoaded(true);
  };

  useEffect(() => {
    const sectionRefs = [
      { id: "about", ref: aboutRef },
      { id: "events", ref: eventsRef },
      { id: "merch", ref: merchRef },
      { id: "resources", ref: resourcesRef },
      { id: "faq", ref: faqRef },
      { id: "team", ref: teamRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matched = sectionRefs.find(
              (section) => section.ref.current === entry.target
            );
            if (matched) {
              if (matched.id === "team" && !teamLoaded) {
                fetchMembers(); // Fetch from Firebase here
              } else {
                setActiveSection(matched.id);
              }
            }
          }
        });
      },
      {
        threshold: 0.3, // 20% of section must be visible
      }
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    // Watch for resize changes in the team section, after it's lazy loaded
    const resizeObserver = new ResizeObserver(() => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
        observer.observe(teamRef.current);
      }
    });

    const currentElement = teamRef.current;
    if (currentElement) resizeObserver.observe(teamRef.current);

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });

      if (currentElement) resizeObserver.unobserve(currentElement);
    };
  }, [teamLoaded]);

  return (
    <div>
      <Header activeSection={activeSection} alwaysBackground={true} />
      <Carousel />

      <div className="about-content">
        {/* Section 1: About Us Section*/}
        <section ref={aboutRef} id="about" className="background-section">
          <AboutSection></AboutSection>
        </section>
        {/* Section 1.1: Bioinformatics Section*/}
        <section className="intro-section">
          <div
            className="center-flex"
            onClick={() => toggleBioinformatics(!openBioinformatics)}
          >
            <img
              src="/arrow.svg"
              alt="arrow"
              className={openBioinformatics ? "arrow-active" : ""}
            ></img>
            <h2>What is Bioinformatics?</h2>
          </div>
          {openBioinformatics && (
            <div className="section-inner">
              <div className="centered-div">
                <p>
                  Bioinformatics is an interdisciplinary field that combines
                  biology, computer science, mathematics, and statistics to
                  analyze and interpret biological data. It is crucial to
                  understanding complex biological systems and advancing medical
                  research.
                </p>

                <h2>Applications</h2>
                <div className="applications-grid">
                  <div className="application-card">
                    <h3>Genomics</h3>
                    <p>Analysis of DNA sequences and genetic information</p>
                  </div>
                  <div className="application-card">
                    <h3>Proteomics</h3>
                    <p>Study of protein structure and function</p>
                  </div>
                  <div className="application-card">
                    <h3>Drug Discovery</h3>
                    <p>Computer-aided drug design and development</p>
                  </div>
                  <div className="application-card">
                    <h3>Disease Research</h3>
                    <p>Understanding disease mechanisms and treatments</p>
                  </div>
                  <div className="application-card">
                    <h3>Other Biotech</h3>
                    <p>Biotech applications of bioinformatics</p>
                  </div>
                  <div className="application-card">
                    <h3>Data Visualization</h3>
                    <p>Graphing and displaying bioinformatics data</p>
                  </div>
                </div>

                <h2>Key Skills</h2>
                <div className="skills-grid">
                  <div className="skill-card">
                    <h3>Programming</h3>
                    <p>Command line, Python, R, C++, and more</p>
                  </div>
                  <div className="skill-card">
                    <h3>Data Analysis</h3>
                    <p>Statistical analysis and visualization</p>
                  </div>
                  <div className="skill-card">
                    <h3>Biology</h3>
                    <p>Understanding biological systems</p>
                  </div>
                  <div className="skill-card">
                    <h3>Machine Learning</h3>
                    <p>AI and predictive modeling</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Section 1.2: Mission Section*/}
        <section className="background-section">
          <div className="centered-div">
            <h2 style={{ margin: "1.5rem auto" }}>Our Mission</h2>
            <p>
              UBIC aims to provide students with opportunities to explore
              bioinformatics through workshops, career-building, and networking
              events. We strive to create an inclusive environment where
              students can learn, collaborate, and grow in their understanding
              of this interdisciplinary field.
            </p>

            <div className="values-grid">
              <div className="value-card">
                <h3>Learning</h3>
                <p>
                  Continuous education and skill development in bioinformatics
                </p>
              </div>
              <div className="value-card">
                <h3>Community</h3>
                <p>
                  Building a supportive network of bioinformatics enthusiasts
                </p>
              </div>
              <div className="value-card">
                <h3>Innovation</h3>
                <p>Exploring cutting-edge developments in the field</p>
              </div>
              <div className="value-card">
                <h3>Collaboration</h3>
                <p>Working together to solve complex biological problems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Events Section*/}
        <section ref={eventsRef} id="events" className="background-section">
          <div className="bottom-underline">
            <h1>Events</h1>
          </div>

          <p className="centered-paragraph">
            Make sure to join our weekly newsletter, Discord, and Instagram for
            upcoming events.
          </p>

          <div className="contact-methods">
            <EventCard
              imgsrc="/camping.svg"
              title="WORKSHOPS"
              description="A quarter-long sequence for both new and experienced
                  bioinformaticians, from introductory Python lessons to
                  challenging data analysis projects."
            ></EventCard>

            <EventCard
              imgsrc="/chalk_talk.svg"
              title="CHALK TALKS"
              description="Professors from various fields are invited every chalk talk to
                  describe their research focus. Explore the vibrant
                  bioinformatics research community on campus and network with
                  UCSD professors!"
            ></EventCard>

            <EventCard
              imgsrc="/socials.svg"
              title="SOCIALS"
              description="UBIC hosts a variety of social events to make new friends. These
                  include bonfires, retreats, game nights, and more! "
            ></EventCard>

            <EventCard
              imgsrc="/mentor_mentee.svg"
              title="MENTOR-MENTEE PROGRAM"
              description="Our mentorship program pairs together undergraduates of
                  varying experience levels. Join as a mentor or mentee to gain
                  invaluable peer guidance and leadership opportunities."
            ></EventCard>

            <EventCard
              imgsrc="/conference_speaker.svg"
              title="INDUSTRY PANELS"
              description="Industry professionals and UCSD alumni at various biotech
                  companies are invited to share their experiences and give
                  advice. Get the opportunity to network with industry
                  professionals!"
            ></EventCard>

            <EventCard
              imgsrc="/puzzles.svg"
              title="COMMUNITY SERVICE"
              description="Participate in giving back to the community, from volunteering
                  at food banks to crafting supportive cards."
            ></EventCard>
          </div>
        </section>

        {/* Section 3: Merch Section*/}
        <section ref={merchRef} id="merch" className="background-section">
          <div className="bottom-underline">
            <h1>Merch</h1>
          </div>
          <h3 style={{ margin: "2rem auto" }}>Coming Soon!</h3>
          <div className="center-flex">
            <img src="/shirts2023.jpg" alt="tshirts" width="400px"></img>
            <img src="/shirts2025.jpg" alt="tshirts2" width="400px"></img>
          </div>
        </section>
        <section
          ref={resourcesRef}
          id="resources"
          className="background-section"
        >
          <div className="bottom-underline">
            <h1>Resources</h1>
          </div>
          <h3 style={{ margin: "2rem auto" }}>Coming Soon!</h3>
        </section>

        {/* Section 4: FAQ Section*/}
        <section ref={faqRef} id="faq" className="background-section">
          <div className="bottom-underline">
            <h1>FAQ</h1>
          </div>
          <h3>Is attendance mandatory?</h3>
          <p> No, but attend all events that you are interested in!</p>
          <h3>What is the best way to stay updated about events?</h3>{" "}
          <p>
            Instagram, Weekly Newsletters, Discord Announcements, and the Events
            tab above.
          </p>
          <h3> How often are events held?</h3> <p>Several times a month.</p>
          <h3> Do we offer coding/bioinformatics tutorials?</h3>{" "}
          <p>
            {" "}
            Yes, make sure to attend our workshops! Also visit{" "}
            <a href="https://www.bioinformaticscrashcourse.com">
              bioinformaticscrashcourse.com
            </a>{" "}
            for an online tutorial created by UBIC alumni.
          </p>
          <h3>
            {" "}
            How do I stay updated on research and industry opportunities?
          </h3>{" "}
          <p>
            Join the discord #opportunities channel, and check the Resources tab
            above.
          </p>
        </section>

        {/* Section 5: Team Section*/}
        <section ref={teamRef} id="team" className="background-section">
          <div className="bottom-underline">
            <h1>Team</h1>
          </div>
          {teamLoaded === true ? (
            Object.keys(positionGroups).map((position) => (
              <div key={position} className="position-section">
                {/* {position !== "Executive" && <h2>{position}</h2>} */}
                <TeamCardsContainer
                  members={positionGroups[position]}
                  title={position}
                />
              </div>
            ))
          ) : (
            <h3>Loading team...</h3>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
