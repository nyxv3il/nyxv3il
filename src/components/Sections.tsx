import { useEffect, useState } from "react";
import pfp from "../assets/pfp.jpeg";
import "./Sections.css";

const dataFile =
  "https://gist.githubusercontent.com/nyxv3il/f21d4603534c6ff57d4a35325e073923/raw/3ca721ee7b73f22d7aca650c4ab7b842335873f4/gistfile1.txt";

function Sections() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(dataFile)
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => setErr(error.message ?? "Unknown error"));
  }, []);

  if (err) return <div>Error: {err}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <section className="landing">
        <img src={pfp} alt="PFP" />
        <h1>{data.name}</h1>
        <h3>{data.role}</h3>
      </section>
      <section id="about">
        <h1 className="sectionTitle">ABOUT ME</h1>
        <h3>
          I go by the name {data.name}. I'm a{" "}
          {new Date().getFullYear() - data.birth}
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
