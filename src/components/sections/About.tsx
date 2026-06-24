import type { Props } from "../../App";
import "./About.css";

export default function About({ data }: Props) {
  const age = data.siteData?.birth
    ? new Date().getFullYear() - data.siteData.birth
    : "unknown";

  return (
    <section id="about">
      <h1 className="sectionTitle">ABOUT ME</h1>
      <h3 style={{ userSelect: "text" }}>
        I go by the name {data.userData?.login.toUpperCase()}. I'm a {age}
        -year-old with a strong passion for technology. I work as a Full-Stack
        Developer and a Cyber Security student, And I am steadily growing in the
        field of Cyber Security. My journey began at the age of 13 when I became
        curious about how my favorite game worked, And tried to get more money
        in the game. That curiosity led me to explore how the Internet and
        Computers function, and I have been learning and improving ever since.
      </h3>
      <p>
        BTW I made this website with 0 use of AI <br /> Big Shoutout to{" "}
        <a href="https://stackoverflow.com" target="_blank">
          StackOverflow
        </a>
      </p>
    </section>
  );
}
