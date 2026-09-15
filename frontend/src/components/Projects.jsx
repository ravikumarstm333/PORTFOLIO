import { useEffect } from "react";
import { projectsData } from "../data/portfolioData";

function Projects() {
	useEffect(() => {
		const revealElements = document.querySelectorAll("#projects .reveal");
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			revealElements.forEach((element) => element.classList.add("in"));
			return undefined;
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("in");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15 });

		revealElements.forEach((element) => observer.observe(element));
		return () => observer.disconnect();
	}, []);

	return (
		<section id="projects">
			<span className="eyebrow">Main Focus</span>
			<h2 className="section-title">Things I&apos;ve Built</h2>
			{projectsData.map((project, index) => (
				<div className={`project-row ${index % 2 ? "reverse" : ""} reveal`} key={project.title}>
					<div className="p-media"><img src={project.image} alt={project.alt} /></div>
					<div className="p-body">
						<div className="p-tag">{project.tag}</div>
						<h3>{project.title}</h3>
						<span className={`p-status ${index ? "progress" : ""}`}>{project.status}</span>
						<p>{project.description}</p>
						<div className="tech-row">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
						<div className="p-links"><a href={project.links.demo} target="_blank" rel="noreferrer">Live Demo <span>→</span></a><a href={project.links.github} target="_blank" rel="noreferrer">GitHub <span>→</span></a></div>
					</div>
				</div>
			))}
		</section>
	);
}

export default Projects;
