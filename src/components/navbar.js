import React from "react";
import "../styles/Navbar.css";
import logoV from "../assets/logoV.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo-wrap">
          <img src={logoV} alt="V Logo" className="logo" />
        </div>
        <div className="nav-icons">
          <a href="mailto:youremail@example.com" aria-label="mail"><i className="ri-mail-line"></i></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><i className="ri-github-fill"></i></a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><i className="ri-linkedin-box-fill"></i></a>
        </div>
      </div>
    </header>
  );
}
