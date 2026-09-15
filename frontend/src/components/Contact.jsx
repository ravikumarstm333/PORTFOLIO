import { useState } from "react";
import { contactData } from "../data/portfolioData";
import "./Contact.css";

function Contact() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <section id="contact">
            <div className="contact-grid">
                <div>
                    <span className="eyebrow">Get In Touch</span>

                    <h2 className="contact-heading">
                        Let's build something useful.
                    </h2>

                    <p className="contact-copy">
                        I'm always interested in interesting AI, ML, Robotics and software projects.
                    </p>

                    <div className="contact-links">
                        <a href={`mailto:${contactData.email}`} className="contact-link">
                            <span>Email</span>
                            <span>{contactData.email}</span>
                        </a>

                        <a href={contactData.github} className="contact-link" target="_blank" rel="noreferrer">
                            <span>GitHub</span>
                            <span>{contactData.github.replace("https://", "")}</span>
                        </a>

                        <a href={contactData.linkedin} className="contact-link" target="_blank" rel="noreferrer">
                            <span>LinkedIn</span>
                            <span>{contactData.linkedin.replace("https://", "")}</span>
                        </a>
                    </div>
                </div>

                <form id="contactForm" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                    />

                    <textarea
                        placeholder="Your Message"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ justifyContent: "center" }}
                    >
                        Send Message →
                    </button>

                    <div className="form-out" id="formOut">{submitted ? "Message sent — I'll get back to you soon." : ""}</div>
                </form>
            </div>
        </section>
    );
}

export default Contact;