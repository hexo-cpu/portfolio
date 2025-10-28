

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoMain from "../assets/Logo (3).png";
import "../Mycss/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Lab", path: "/lab" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header className="header">
      <div className="container header-div">
        <div
          className="logoMain"
          onClick={scrollToTop}
          style={{ cursor: "pointer" }}
        >
          <img src={logoMain} alt="MainLogo" width={100} />
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navlinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
      </div>
    </header>
  );
}
