import React from "react";

const projects = [
  {
    name: "Smart Plant Pot",
    tech: "Arduino • C++ • IoT • Sensors • Cloud",
    desc: "An IoT-based system that displays plant emotions and monitors soil moisture in real-time.",
    link: "https://github.com/Rishita-chawla/project1"
  },
  {
    name: "Weather App",
    tech: "JavaScript • HTML • CSS • OpenWeather API",
    desc: "A simple live weather checker that fetches real-time weather data using OpenWeather API.",
    link: "https://github.com/Rishita-chawla/weather-app"
  },
  {
    name: "To-Do List",
    tech: "JavaScript • HTML • CSS",
    desc: "A clean and simple task tracking app that allows users to manage daily tasks.",
    link: "https://github.com/Rishita-chawla/to-do-list"
  },
  {
    name: "TextUtils",
    tech: "React • JavaScript • Bootstrap",
    desc: "A text transformation tool with features like uppercase, lowercase, remove spaces, and more.",
    link: "https://rishita-chawla.github.io/TextUtils/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.name}>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p className="muted small">{p.tech}</p>
                <p className="desc">{p.desc}</p>
                <div className="project-actions">
                  <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-sm">
                    View Code / Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
