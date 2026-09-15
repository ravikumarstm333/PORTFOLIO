import { certificatesData } from "../data/portfolioData";

function Certificates() {
	return (
		<section id="certificates">
			<span className="eyebrow">Credentials</span>
			<h2 className="section-title">Certificates</h2>
			<div className="cert-scroll">
				{certificatesData.map((certificate) => (
					<div className="cert-card" key={certificate.title}>
						<div className="cert-img">CERTIFICATE</div>
						<div className="cert-body">
							<h4>{certificate.title}</h4>
							<div className="org">Issuing organization</div>
							<div className="meta"><span>{certificate.year}</span><a href={certificate.url} target="_blank" rel="noreferrer">View →</a></div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Certificates;
