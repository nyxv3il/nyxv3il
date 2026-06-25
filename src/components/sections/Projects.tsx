import type { Props } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

export default function Projects({ data }: Props) {
  return (
    <section id="projects">
      <h1 className="sectionTitle">Projects</h1>
      <div className="cards">
        {data.repos?.map(({ name, html_url, description, language }) => (
          <div className="card" key={name}>
            <div className="cardHeader">
              <FontAwesomeIcon icon={faGithub} className="cardIcon" />
              <h3>{name}</h3>
            </div>
            <p>{description}</p>
            {language ? <span className="tag">{language}</span> : null}
            <a className="action" href={html_url} target="_blank">
              View on GitHub
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
