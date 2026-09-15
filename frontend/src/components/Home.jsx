import About from "./About";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Projects from "./Projects";
import Skill from "./Skill";
import { activityData, contactData, heroData, statsData } from "../data/portfolioData";
import { useEffect, useState } from "react";

function Home() {
    const [leetcodeProblam,setLeetcodeProblam]=useState();
    useEffect(()=>{
        fetch(`${import.meta.env.BASE_URL}/codingproblem/leetcode`)
        .then(res=>{
            if(!res.ok){
                throw new Error(`Http Error : ${res.status}`);
            }
            return res.json();
        })
        .then(data=>{
            setLeetcodeProblam(data)
        })
         .catch((error) => {
            console.error("LeetCode Error:", error);
        });
    },[])
    console.log(leetcodeProblam)
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

            <section id="stats"><div className="stats-row">{statsData.map((stat) => <div className="stat" key={stat.label}><div className="num">{stat.value}</div><div className="lbl">{stat.label}</div></div>)}</div></section>

            <Certificates />

            <section id="activity"><span className="eyebrow">Developer Activity</span><h2 className="section-title">Where the hours go</h2><div className="activity-grid">{activityData.map((activity) => <div className="activity-card" key={activity.label}><div className="k">{activity.label}</div><div className="v">{activity.value}</div></div>)}</div></section>

            <Contact />
            <footer><div>© 2026 Ravi Kumar — AI/ML • Robotics • IoT</div><div><a href={contactData.github} target="_blank" rel="noreferrer">GitHub</a><a href={contactData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${contactData.email}`}>Email</a></div></footer>
        </main>
    );
}

export default Home;
