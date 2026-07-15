import "./Navbar.css";
import profile from "../assets/vite.svg";

function Navbar({ setPage }) {

  return (

    <nav className="navbar">

      <div className="nav-left">

        <img
          src={profile}
          className="profile-img"
          alt=""
        />

      </div>

      <div className="nav-center">

        <h1>Ravi Kumar</h1>

        <div className="nav-links">

          <button onClick={() => setPage(0)}>Home</button>

          <button onClick={() => setPage(1)}>About</button>

          <button onClick={() => setPage(2)}>Projects</button>

          <button onClick={() => setPage(3)}>Certificates</button>

          <button onClick={() => setPage(4)}>Contact</button>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;