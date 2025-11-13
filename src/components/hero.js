import React from "react";
import "../styles/Hero.css";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">Welcome.</h1>
        <p className="hero-desc">
          My name is <strong>Vamsi Sankar</strong>, I'm a full-stack developer who builds clean, performant and beautiful web apps using React and Node.
        </p>
      </div>

      <aside className="hero-right">
        <div className="projects-column">
          <h3>Projects</h3>
          <ul>
            <li><a href="https://dynmcalculator.netlify.app">Dynamic Calculator</a></li>
            <li><a href="https://resume.netlify.app">AI Resume Builder</a></li>
            <li><a href="https://vamsi-portfolio.netlify.app">Portfolio Website</a></li>
            <li><a href="https://dynmcweather.netlify.app">Weather App</a></li>
          </ul>
        </div>

        <div className="profile-card">
          <img src={profile} alt="profile" />
        </div>
      </aside>
    </section>
  );
}
