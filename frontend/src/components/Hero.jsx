import { heroData } from "../data/portfolioData";
import raviimg from '../assets/ravi.png'
function Hero() {
    return (
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
    )

}
export default Hero;