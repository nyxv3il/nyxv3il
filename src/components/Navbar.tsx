import "./Navbar.css";
import pfp from "../assets/pfp.jpeg";
import { useState } from "react";
import data from "../assets/data.json";

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={pfp} alt="PFP" />
        <h1>{data.name}</h1>
      </div>
      <div className={`navList ${menuExpanded ? "expanded" : ""}`}>
        {data.navLinks.map(({ name, target }) => (
          <a
            className={`action navLink ${active === target ? "active" : ""}`}
            href={target}
            onClick={() => setActive(target)}
          >
            {name}
          </a>
        ))}
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
