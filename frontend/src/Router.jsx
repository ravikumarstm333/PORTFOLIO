import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}
export default Router;