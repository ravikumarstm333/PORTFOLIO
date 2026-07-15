import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {

  const [page, setPage] = useState(0);

  return (
    <div className="app">

      <Navbar setPage={setPage} />

      <div
        className="pages"
        style={{
          transform: `translateX(-${page * 100}vw)`
        }}
      >

        <Home />
        <About />
        <Projects />
        <Certificates />
        <Contact />

      </div>

    </div>
  );
}

export default App;