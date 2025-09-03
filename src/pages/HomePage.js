import React, { useRef, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Header from "../components/Header";
import Carousel from "../components/ImageCarousel/Slider";
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
    const querySnapshot = await getDocs(collection(db, "teamMembers"));
    const membersData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

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
      const position = member.position || "Other"; // Use "Other" for missing positions
      if (!acc[position]) acc[position] = [];
      acc[position].push(member);
      return acc;
    }, {});

    // Combine executive members at the top, followed by other grouped positions
    setPositionGroups({
      "Executive Board": executiveMembers,
      ...groupedByPosition,
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
              setActiveSection(matched.id);
              if (matched.id === "team" && !teamLoaded) {
                fetchMembers(); // Fetch from Firebase here
              }
            }
          }
        });
      },
      {
        threshold: 0.3, // 30% of section must be visible
      }
    );

    sectionRefs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="home-page">
      <Header activeSection={activeSection} alwaysBackground={true} />
      <Carousel />

      <div className="main-content">
        <div className="about-content">
          <section ref={aboutRef} id="about" className="background-section">
            <div className="bottom-underline">
              <h1>About Us</h1>
            </div>
            <p className="centered-paragraph">
              Founded in 2012, the Undergraduate Bioinformatics Club (UBIC) at
              UCSD is a student-led organization dedicated to fostering a
              community of students passionate about bioinformatics and
              computational biology. This is a place for students who are
              interested in bioinformatics to spread their wings. From research,
              leadership, and networking opportunities to building friendships
              that will last a lifetime, this is your place to grow!
            </p>
          </section>

          <div className="innerContact">
            <a
              href="https://linktr.ee/ubic_ucsd?fbclid=PAZXh0bgNhZW0CMTEAAaZ8faMPmmRAiqd5e_xc-adjjHS-jyhX-_HPNpISt_SmrrhdPoJnG1x2mLY_aem_e2KImZgOMJKHuXiGcvvdkA"
              target="_blank"
              rel="noopener noreferrer"
              className="join-button"
            >
              Join Us
              <img
                src="/linktree_white.svg"
                alt="linktree_logo"
                height="35px"
              ></img>
            </a>
          </div>
          <section className="contact-methods">
            <div className="contact-card">
              <h3>Email</h3>
              <p>Contact us at ubic@ucsd.edu</p>
              <div className="innerContact">
                <img src="/mail_black.svg" alt="mail_logo" height="40px"></img>
                <a
                  href="mailto:ubic@ucsd.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linktree-link"
                >
                  ubic@ucsd.edu
                </a>
              </div>
            </div>
            <div className="contact-card">
              <h3>Discord</h3>
              <p>Join our Discord server to connect with other members!</p>
              <div className="innerContact">
                <img
                  src="/discord_black.svg"
                  alt="discord_logo"
                  height="40px"
                ></img>
                <a
                  href="https://discord.gg/Dgt4esxQzn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="discord-link"
                >
                  Join Discord
                </a>
              </div>
            </div>
            <div className="contact-card">
              <h3>Instagram</h3>
              <p>Follow us for updates and event announcements</p>
              <div className="innerContact">
                <img
                  src="/instagram_black.svg"
                  alt="insta_logo"
                  height="40px"
                ></img>
                <a
                  href="https://www.instagram.com/ucsd_bioinformatics/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-link"
                >
                  @ucsd_bioinformatics
                </a>
              </div>
            </div>
          </section>

          <section className="intro-section">
            <div className="section-inner">
              <div className="centered-div">
                <h2>What is Bioinformatics?</h2>
                <p>
                  Bioinformatics is an interdisciplinary field that combines
                  biology, computer science, mathematics, and statistics to
                  analyze and interpret biological data. It plays a crucial role
                  in understanding complex biological systems and advancing
                  medical research.
                </p>
              </div>

              <section className="applications-section">
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
              </section>

              <section className="skills-section">
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
              </section>
            </div>
          </section>

          <section className="mission-section">
            {/* <h2>Our Values</h2> */}
            <h2>Our Mission</h2>
            <p>
              UBIC aims to provide students with opportunities to explore
              bioinformatics through workshops, research presentations, and
              networking events. We strive to create an inclusive environment
              where students can learn, collaborate, and grow in their
              understanding of this interdisciplinary field.
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
          </section>
          <section ref={eventsRef} id="events" className="background-section">
            <div className="bottom-underline">
              <h1>Events</h1>
            </div>

            <div className="contact-methods">
              <div className="contact-card">
                <img src="/camping.svg" alt="camping" height="150px"></img>
                <div>
                  <h2> WORKSHOPS </h2>
                  <p>
                    A year-long introductory sequence of lessons to introduce
                    new bioinformaticians to lab-applicable technical skills,
                    led by UBIC board members.
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <img
                  src="/chalk_talk.svg"
                  alt="chalk_talk"
                  height="150px"
                ></img>
                <div>
                  <h2> CHALK TALKS </h2>
                  <p>
                    Professors from various fields are invited every chalk talk
                    to detail their research focus. Explore the vibrant
                    bioinformatics research community on campus and network with
                    UCSD professors!
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <img src="/socials.svg" alt="socials" height="150px"></img>
                <div>
                  <h2> SOCIALS </h2>
                  <p>
                    UBIC holds a variety of social events for students. These
                    include bonfires, retreats, game nights, and more! Make sure
                    to check our Discord and Instagram for upcoming social
                    events.
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <img
                  src="/mentor_mentee.svg"
                  alt="mentor-mentee"
                  height="150px"
                ></img>
                <div>
                  <h2> MENTOR-MENTEE PROGRAM </h2>
                  <p>
                    Our mentorship program pairs together undergraduates of
                    varying experience levels. Join as a mentor or mentee to
                    gain valuable peer guidance and leadership opportunities!
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <img
                  src="/conference_speaker.svg"
                  alt="conference"
                  height="150px"
                ></img>
                <div>
                  <h2> INDUSTRY PANELS </h2>
                  <p>
                    Industry professionals and UCSD alumni at companies such as
                    Illumina, Myriad Genetics, and Exact Sciences are invited to
                    share their experiences and talk with students. Get the
                    opportunity to network with industry professionals!
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <img
                  src="/conference_speaker.svg"
                  alt="conference"
                  height="150px"
                ></img>
                <div>
                  <h2> COMMUNITY SERVICE </h2>
                  <p>
                    Check out how to give back to the community, from
                    volunteering at food banks to writing supportive messages.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section ref={merchRef} id="merch" className="background-section">
            <div className="bottom-underline">
              <h1>Merch</h1>
            </div>
            <p>
              UBIC merch photos Status on inventory Google forms to fill out for
              the merch
            </p>
          </section>
          <section
            ref={resourcesRef}
            id="resources"
            className="background-section"
          >
            <div className="bottom-underline">
              <h1>Resources</h1>
            </div>
            <ul>
              <li>Industry Contact</li>
              <li>Professor Contact</li>
              <li>UCSD Classes resources</li>
            </ul>
          </section>
          <section ref={faqRef} id="faq" className="background-section">
            <div className="bottom-underline">
              <h1>FAQ</h1>
            </div>
            <h3>Is attendance mandatory?</h3>
            <p> No, but attend all events that you are interested in!</p>
            <h3>What is the best way to stay updated about events?</h3>{" "}
            <p>
              Instagram, Weekly Newsletters, Discord Announcements, and the
              Events tab above.
            </p>
            <h3> How often are events held?</h3> <p>3-5 times a month.</p>
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
              Join the discord #opportunities channel, and check the Resources
              tab above.
            </p>
          </section>
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
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
