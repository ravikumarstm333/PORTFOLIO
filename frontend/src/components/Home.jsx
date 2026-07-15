import "./Section.css";
import bg from "../assets/vite.svg";

export default function Home() {
  return (
    <section
      id="home"
      className="section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay">
        <h1>Hi, I'm Ravi Kumar</h1>
        <p>Welcome to my portfolio.</p>
      </div>
    </section>
  );
}