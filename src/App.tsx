import { navbarHeight } from "./main";

export default function App() {
  return (
    <main
      style={{
        display: "flex",
        width: "100%",
        height: `calc(100vh - ${navbarHeight})`,
        background: "#222",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#fff", fontFamily: "Montserrat Variable" }}>
        This Is The Content
      </h1>
    </main>
  );
}
