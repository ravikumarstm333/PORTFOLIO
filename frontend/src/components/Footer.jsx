import {contactData} from "../data/portfolioData";
function Footer() {
    return (
        <footer>
            <div>© 2026 Ravi Kumar — AI/ML • Robotics • IoT</div>
            <div>
                <a href={contactData.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={contactData.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={`mailto:${contactData.email}`}>Email</a>
            </div>
        </footer>
    )
}
export default Footer;