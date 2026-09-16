import { journeyData } from "../data/portfolioData";
function About() {
	return (
		<>
		<section id="about">
			<span className="eyebrow">My Journey</span>
			<h2 className="section-title">Turning curiosity into technology.</h2>
			<div className="about-grid">
				<p className="about-copy">I&apos;m an engineering student who got into software through curiosity and stayed for the problem-solving. That path led from web development into machine learning, then computer vision, and now robotics and IoT, where models meet hardware.</p>
				<div className="journey">
					{journeyData.map((item, index) => (
						<div className="j-item" key={item}>
							<div className="j-num">0{index + 1}</div>
							<div><div className="j-title">{item}</div></div>
						</div>
					))}
				</div>
			</div>
		</section>
		</>
	);
}

export default About;
