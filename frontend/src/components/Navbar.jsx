import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={menuOpen ? "menu-open" : ""}>
            <div className="logo">RAVI KUMAR</div>
            <ul className="nav-links">
                <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                <li><NavLink to="/skills" onClick={closeMenu}>Skills</NavLink></li>
                <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
                <li><NavLink to="/certificates" onClick={closeMenu}>Certificates</NavLink></li>
                <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
                <li><NavLink to="/aget" onClick={closeMenu}
                style={{color:"Blue"}}
                >Ask my Agent..</NavLink></li>
            </ul>
            <NavLink to="/contact" className="nav-cta" onClick={closeMenu}>Let's Talk →</NavLink>
            <button
                className="hamburger"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
            >
                <span></span><span></span><span></span>
            </button>
        </nav>
    );
}
export default Navbar;