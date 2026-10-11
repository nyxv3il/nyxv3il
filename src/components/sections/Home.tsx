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
          window.location.href = "https://www.youtube.com/watch?v=9hhMUT2U2L4";
        }}
      />
      <h1>{data.userData?.login.toUpperCase()}</h1>
      <h3>{data.siteData?.role}</h3>
    </section>
  );
}
