import type { Props } from "../../App";
import "./Home.css";

export default function Home({ data }: Props) {
  return (
    <section id="home">
      <img
        src={data.userData?.avatar_url ?? ""}
        alt="PFP"
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
        }}
      />
      <h1>{data.userData?.login.toUpperCase()}</h1>
      <h3>{data.siteData?.role}</h3>
    </section>
  );
}
