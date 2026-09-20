import Contact from "./Contact";
import { heroData } from "../data/portfolioData";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import raviimg from '../assets/ravi.png'

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

    console.log(typeof(stateData))
    return (
        <main>
            <section id="hero">
                <div className="hero-grid">
                    <div>
                        <span className="badge">{heroData.badge}</span>
                        <h1 className="hero-heading">
                            <img src={raviimg} alt="ravi-picture" />
                            {heroData.title}<br />{heroData.titleLine}
                        </h1>
                        <p className="hero-sub">{heroData.description}</p>
                        <div className="hero-actions"><a href="/projects" className="btn btn-primary">View My Work</a><a href={heroData.resumeUrl} className="btn btn-ghost">Download Resume</a></div>
                        <div className="social-row">
                            <a href={heroData.socialLinks.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href={heroData.socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a
                                href={heroData.socialLinks.instagram}
                                aria-label="Instagram"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a
                                href={heroData.socialLinks.leetcode}
                                aria-label="Leetcode"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-leetcode"></i>
                            </a>
                            <a
                                href={heroData.socialLinks.geeksforgeeks}
                                aria-label="Geeksforgeeks"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GFG
                            </a>
                            
                            
                        </div>
                    </div>
                    <div className="hero-photo-wrap">
                        <div className="hero-photo"><img src={heroData.image} alt={heroData.imageAlt} /></div>
                        {heroData.labels.map((label, index) => <span className={`float-label label-${["one", "two", "three", "four", "five"][index]}`} key={label}>{label}</span>)}
                    </div>
                </div>
            </section>

            <section id="stats">
                {Object.keys(stateData).length===0?<div id="stats-loading">Loading..</div>:
                <div className="stats-row">
                    <div className="stat">
                        <div className="num">{stateData.cgpa}+</div>
                        <div className="lbl">CGPA</div>
                    </div>
                    <div className="stat">
                        <div className="num">{stateData.projects}+</div>
                        <div className="lbl">PROJECTS</div>
                    </div>
                    <div className="stat">
                        <div className="num">{stateData.technologies}+</div>
                        <div className="lbl">TECHNOLOGIES</div>
                    </div>
                    <div className="stat">
                        <div className="num">{stateData?.leetcode?.total}+</div>
                        <div className="lbl">CODING PROBLEMS</div>
                    </div>
                </div>}
            </section>
            <Contact />
            <Footer />
        </main>
    );
}

export default Home;
