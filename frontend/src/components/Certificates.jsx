import "./Section.css";
import bg from "../assets/vite.svg";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="section"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay">
        <h1>Certificates</h1>

        <p>
          AWS • Coursera • Google • Machine Learning • Python • Deep Learning
        </p>
      </div>
    </section>
  );
} 