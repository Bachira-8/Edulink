import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          Edulink
        </Link>
        <button
          className={`navbar-toggle${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={`navbar-links${menuOpen ? " active" : ""}`}>
          <a href="#home" navigate="/home">Home</a>
          {/* <Link to="/" onClick={() => handleNavClick("/")}>Home</Link> */}
          <a href="#about">About</a>
          {/* <Link to="/about" onClick={() => handleNavClick("/about")}>About</Link> */}
          <a href="#features">Features</a>
          {/* <Link to="/features" onClick={() => handleNavClick("/features")}>Features</Link> */}
          <a href="#contact">Contact</a>
          {/* <Link to="/contact" onClick={() => handleNavClick("/contact")}>Contact</Link> */}
          <div className="navbar-actions-mobile">
            <button onClick={() => handleNavClick("/login")} className="navbar-btn">Login</button>
            <button onClick={() => handleNavClick("/signup")} className="navbar-btn navbar-btn-primary">Sign Up</button>
          </div>
        </div>
        <div className="navbar-actions-desktop">
          <button onClick={() => navigate('/login')} className="navbar-btn">Login</button>
          <button onClick={() => navigate('/signup')} className="navbar-btn navbar-btn-primary">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;