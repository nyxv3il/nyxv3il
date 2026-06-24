import pfp from "../assets/pfp.jpeg";
import "./Sections.css";

function Sections() {
  return (
    <main>
      <section id="home" className="landing">
        <img src={pfp} alt="PFP" />
        <h1>NYXV3IL</h1>
        <h3>Full-Stack Developer, Cyber Security Student</h3>
      </section>
      <section id="about">
        <h1 className="sectionTitle">ABOUT ME</h1>
        <h3 style={{ userSelect: "text" }}>
          I go by the name NYXV3IL. I'm a {new Date().getFullYear() - 2008}
          -year-old with a strong passion for technology. I work as a Full-Stack
          developer and a Cyber Security student, and I am steadily growing in
          the field of Cyber Security. My journey began at the age of 13 when I
          became curious about how my favorite game worked, and tried to get
          more money in the game. That curiosity led me to explore how the
          Internet and computers function, and I have been learning and
          improving ever since.
        </h3>
        <p>BTW I made this website with 0 use of AI</p>
      </section>
      <section id="skills">
        <h1 className="sectionTitle">SKILLS</h1>
      </section>
    </main>
  );
}

export default Sections;
