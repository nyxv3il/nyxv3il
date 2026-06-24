import pfp from "../assets/pfp.jpeg";
import "./Sections.css";
import data from "../assets/data.json";

function Sections() {
  return (
    <main>
      <section id="home" className="landing">
        <img src={pfp} alt="PFP" />
        <h1>{data.name}</h1>
        <h3>{data.role}</h3>
      </section>
      <section id="about">
        <h1 className="sectionTitle">ABOUT ME</h1>
        <h3 style={{ userSelect: "text" }}>
          I go by the name {data.name}. I'm a{" "}
          {new Date().getFullYear() - data.birth}
          -year-old with a strong passion for technology. I work as a Full-Stack
          Developer and a Cyber Security student, And I am steadily growing in
          the field of Cyber Security. My journey began at the age of 13 when I
          became curious about how my favorite game worked, And tried to get
          more money in the game. That curiosity led me to explore how the
          Internet and Computers function, and I have been learning and
          improving ever since.
        </h3>
        <p>BTW I made this website with 0 use of AI</p>
      </section>
      <section id="skills">
        <h1 className="sectionTitle">SKILLS</h1>
        <div className="cards">
          {data.skills.map(({ name, tags }) => (
            <div className="card">
              <h3>{name}</h3>
              <div className="tags">
                {tags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Sections;
