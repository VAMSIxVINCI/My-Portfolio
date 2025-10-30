import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  const items = [
    { title: "Dynamic Calculator", desc: "HTML/CSS/JS + React" },
    { title: "AI Resume Builder", desc: "React + Node + AI" },
    { title: "Portfolio Website", desc: "React + CSS" },
  ];

  return (
    <section className="projects-section">
      <h2>Selected Projects</h2>
      <div className="projects-grid">
        {items.map((p, i) => (
          <div className="proj-card" key={i}>
            <h4>{p.title}</h4>
            <p>{p.desc}</p>
            <a href="https://vamsi-calculator.netlify.app">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}
