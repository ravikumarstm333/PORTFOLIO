import { use, useState } from "react";
import { contactData } from "../data/portfolioData";
import "./Contact.css";

function Contact() {
    const [submitStattus,setSubmitStatus]=useState({
        color:"green",
        status:""
    });
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=new FormData(e.target);
        if(form.get("name")==="" || form.get("email") === "" || form.get("message")===""){
            setSubmitStatus({
                color:"red",
                status:"fill ALL field"
            })
            return;
        }
        setFormData({
            name:form.get("name"),
            email:form.get("email"),
            message:form.get("message")
        })
        
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
                        color:submitStattus.color
                    }}
                    >{submitStattus.status}</div>
                </form>
            </div>
        </section>
    );
}

export default Contact;