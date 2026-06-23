import "./App.css";
import pfp from "./assets/pfp.jpeg";

export default function App() {
  return (
    <main>
      <section className="landing">
        <img src={pfp} alt="PFP" />
        <h1>NYXV3IL</h1>
        <h3>Full-Stack Developer, Cyber Security Student</h3>
      </section>
    </main>
  );
}
