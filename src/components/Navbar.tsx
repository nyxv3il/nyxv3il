import { navbarHeight } from "../main";
import "./Navbar.css";
import pfp from "../assets/pfp.jpeg";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("#");

  return (
    <nav
      style={{
        position: "relative",
        zIndex: 1,
        height: navbarHeight,
        background: "var(--primary)",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "0 3rem 0 3rem",
        boxShadow: "#00000057 0 5px 10px 0",
      }}
    >
      <div
        className="logo"
        style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}
      >
        <img
          style={{
            width: "4rem",
            borderRadius: "50%",
            border: "solid 2px var(--dark)",
          }}
          src={pfp}
          alt="PFP"
        />
        <h1
          style={{
            fontWeight: 700,
            color: "var(--light)",
            fontSize: "2rem",
          }}
        >
          NYXV3IL
        </h1>
      </div>
      <div
        className="navList"
        style={{
          display: "flex",
          gap: "2rem",
          height: "100%",
          alignItems: "center",
        }}
      >
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
    </nav>
  );
}
