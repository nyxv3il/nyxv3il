import "./Sections.css";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import type { Props } from "../App";
function Sections({ data }: Props) {
  return (
    <main>
      <Home data={data} />
      <About data={data} />
      <Skills data={data} />
      <Projects data={data} />
      <Footer data={data} />
    </main>
  );
}

export default Sections;
