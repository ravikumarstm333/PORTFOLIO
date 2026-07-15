import "./Section.css";
import bg from "../assets/vite.svg";

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay">
        <h1>About Me</h1>

        <p>
          I am a Computer Science Engineering student passionate about
          Artificial Intelligence, Machine Learning, Computer Vision,
          Deep Learning, and Full Stack Development.
        </p>
      </div>
    </section>
  );
}