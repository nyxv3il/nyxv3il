import "./Navbar.css";
import { useState } from "react";
import type { Props } from "../App";

export default function Navbar({ data }: Props) {
  const [active, setActive] = useState("#home");
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={data.userData?.avatar_url ?? ""} alt="PFP" />
        <h1>{data.userData?.login.toUpperCase()}</h1>
      </div>
      <div className={`navList ${menuExpanded ? "expanded" : ""}`}>
        {data.siteData?.navLinks?.map(({ name, target }) => (
          <a
            key={target}
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
