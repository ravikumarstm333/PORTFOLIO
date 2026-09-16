import About from "./About";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Projects from "./Projects";
import Skill from "./Skill";
import {contactData, heroData } from "../data/portfolioData";
import { useEffect, useState } from "react";

function Home() {
    const [stateData, setStateData] = useState({});
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/state/data`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Http Error : ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                setStateData(data);
            })
            .catch((error) => {
                console.error("state-data Error:", error);
            });
    }, []);
    console.log(stateData);
    return (
        <main>
            <section id="hero">
                <div className="hero-grid">
                    <div>
                        <span className="badge">{heroData.badge}</span>
                        <h1 className="hero-heading">{heroData.title}<br />{heroData.titleLine}</h1>
                        <p className="hero-sub">{heroData.description}</p>
                        <div className="hero-actions"><a href="#projects" className="btn btn-primary">View My Work</a><a href={heroData.resumeUrl} className="btn btn-ghost">Download Resume</a></div>
                        <div className="social-row">
                            <a href={heroData.socialLinks.github} aria-label="GitHub" target="_blank" rel="noreferrer">GH</a>
                            <a href={heroData.socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">in</a>
                        </div>
                    </div>
                    <div className="hero-photo-wrap">
                        <div className="hero-photo"><img src={heroData.image} alt={heroData.imageAlt} /></div>
                        {heroData.labels.map((label, index) => <span className={`float-label label-${["one", "two", "three", "four", "five"][index]}`} key={label}>{label}</span>)}
                    </div>
                </div>
            </section>

            <About />
            <Skill />
            <Projects />

            <section id="stats">
                <div className="stats-row">
                    <div className="stat">
                        <div className="num">{stateData.cgpa}</div>
                        <div className="lbl">CGPA</div>
                    </div>
                    <div className="stat">
                        <div className="num">{stateData.projects}</div>
                        <div className="lbl">Projects</div>
                    </div>
                    <div className="stat">
                        <div className="num">{stateData.technologies}</div>
                        <div className="lbl">Technologies</div>
                    </div>
                    <div className="stat">
                        <div className="num">{stateData?.leetcode?.total}</div>
                        <div className="lbl">Coding Problems</div>
                    </div>
                </div>
            </section>

            <Certificates />
            <Contact />
            <footer>
                <div>© 2026 Ravi Kumar — AI/ML • Robotics • IoT</div>
                <div>
                    <a href={contactData.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={contactData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href={`mailto:${contactData.email}`}>Email</a>
                </div>
            </footer>
        </main>
    );
}

export default Home;
