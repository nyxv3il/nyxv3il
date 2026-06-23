import "./Navbar.css";
import pfp from "../assets/pfp.jpeg";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("#");
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={pfp} alt="PFP" />
        <h1>NYXV3IL</h1>
      </div>
      <div className={`navList ${menuExpanded ? "expanded" : ""}`}>
        <a
          className={`action navLink ${active === "#" ? "active" : ""}`}
          href="#"
          onClick={() => {
            setActive("#");
          }}
        >
          HOME
        </a>
        <a
          className={`action navLink ${active === "#about" ? "active" : ""}`}
          href="#about"
          onClick={() => {
            setActive("#about");
          }}
        >
          ABOUT
        </a>
        <a
          className={`action navLink ${active === "#skills" ? "active" : ""}`}
          href="#skills"
          onClick={() => {
            setActive("#skills");
          }}
        >
          SKILLS
        </a>
        <a
          className={`action navLink ${active === "#projects" ? "active" : ""}`}
          href="#projects"
          onClick={() => {
            setActive("#projects");
          }}
        >
          PROJECTS
        </a>
      </div>
      <div
        onClick={() => {
          if (!menuExpanded) {
            setMenuExpanded(true);
          } else if (menuExpanded) {
            setMenuExpanded(false);
          }
        }}
        className={`action menu ${menuExpanded ? "expanded" : ""}`}
      >
        <div className="one"></div>
        <div className="two"></div>
      </div>
    </nav>
  );
}
