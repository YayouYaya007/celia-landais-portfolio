import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderClair.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img
            className="logoimg"
            src="/public/assets/logo/logopetit.png"
            alt="Logo"
            style={{ width: "55px" }}
          />
        </Link>

        <nav className={menuOpen ? "active" : ""} className="nav">
          <div className="gauche">
            <Link to="/work-in-progress" className="linktext link1">
              Projet
            </Link>
          </div>
          <div className="droite">
            <a
              href="https://github.com/YayouYaya007"
              target="_blank"
              className="link"
              onClick={() => setMenuOpen(false)}
            >
              <img
                className="icon"
                src="/public/assets/icone/githubblanc.svg"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/celia-landais/"
              target="_blank"
              className="link"
              onClick={() => setMenuOpen(false)}
            >
              <img
                className="icon"
                src="/public/assets/icone/linkedinblanc.svg"
                alt="LinkedIn"
              />
            </a>
            <a
              href="#Instagram"
              sclassName="link"
              onClick={() => setMenuOpen(false)}
            >
              <img
                className="icon"
                src="/public/assets/icone/instagramblanc.svg"
                alt="Instagram"
              />
            </a>
            <a
              href="#Contact"
              className="link"
              onClick={() => setMenuOpen(false)}
            >
              <img
                className="icon"
                src="/public/assets/icone/phoneblanc.svg"
                alt="Contact"
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
