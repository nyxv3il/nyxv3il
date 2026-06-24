import type { Props } from "../../App";
import "./Skills.css";

export default function Skills({ data }: Props) {
  return (
    <section id="skills">
      <h1 className="sectionTitle">SKILLS</h1>
      <div className="cards">
        {data.siteData?.skills?.map(({ name, tags }) => (
          <div className="card" key={name}>
            <h3>{name}</h3>
            <div className="tags">
              {tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
