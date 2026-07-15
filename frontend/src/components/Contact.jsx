import "./Section.css";
import bg from "../assets/vite.svg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay">
        <h1>Contact</h1>

        <p>Email : your@email.com</p>
        <p>LinkedIn</p>
        <p>GitHub</p>
      </div>
    </section>
  );
}