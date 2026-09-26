import { use, useState } from "react";
import { contactData } from "../data/portfolioData";
import axios from "axios"
import "./Contact.css";

function Contact() {
    const [submitStattus, setSubmitStatus] = useState({
        color: "green",
        status: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const form = new FormData(e.target);
            const newMessage = {
                name: form.get("name").trim(),
                email: form.get("email").trim(),
                message: form.get("message").trim()
            };
            const responce = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/contact/message`, newMessage);
            if (responce.data.success) {
                setSubmitStatus({
                    color: "green",
                    status: responce.data.message,
                })
                e.target.reset();
            } else {
                setSubmitStatus({
                    color: "red",
                    status: responce.data.message,
                })
            }
        }
        catch (error) {
            console.log(error);
            setSubmitStatus({
                color: "red",
                status:"Something went wrong",
            });
        }

    }

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

                <form id="contactForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        name="name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        required
                        name="email"
                    />

                    <textarea
                        placeholder="Your Message"
                        required
                        name="message"
                    ></textarea>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ justifyContent: "center" }}
                    >
                        Send Message →
                    </button>

                    <div className="form-out" id="formOut"
                        style={{
                            color: submitStattus.color
                        }}
                    >{submitStattus.status}</div>
                </form>
            </div>
        </section>
    );
}

export default Contact;