import Router from "./Router";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
    const { pathname } = useLocation();
    return (
        <>
            <Navbar />
            {pathname === "/" ? <Home /> : <Router />}
        </>
    );
}
export default App;