import { skillsData } from "../data/portfolioData";

function Skill() {
	return (
		<section id="skills">
			<span className="eyebrow">Tools I Reach For</span>
			<h2 className="section-title">My Toolkit</h2>
			<div className="skill-map">
				{skillsData.map(({ title, items }) => (
					<div className="skill-col" key={title}>
						<h4>{title}</h4>
						<ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
					</div>
				))}
			</div>
		</section>
	);
}

export default Skill;
