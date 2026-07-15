import "./Section.css";
import bg from "../assets/react.svg";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay">
        <h1>Projects</h1>

        <p>
          Plant Disease Detection • Hostel Management System • AI Chatbot •
          Computer Vision Applications
        </p>
      </div>
    </section>
  );
}