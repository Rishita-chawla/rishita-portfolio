import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, I'm <span className="accent">Rishita</span>
            <span className="wave"> 👋</span>
          </h1>
          <p className="lead">
            Computer Science graduate passionate about building modern web experiences with React, JavaScript and clean UI.
          </p>

          <div className="cta-row">
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href="/Rishita%20chawla.pdf" download>Download Resume</a>
          </div>

          <div className="links-row">
            <a href="https://github.com/Rishita-chawla" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/rishita-chawla-a587a2264" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:rishitachawla1513@gmail.com">Email</a>
          </div>
        </div>

        <aside className="profile-card">
          <div className="avatar">RC</div>
          <h3>Rishita Chawla</h3>
          <p className="muted">Frontend Developer • React • DSA</p>

          <div className="stats">
            <div>
              <div className="stat-num">250+</div>
              <div className="stat-label">DSA problems</div>
            </div>
            <div>
              <div className="stat-num">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div>
              <div className="stat-num">94%</div>
              <div className="stat-label">12th CBSE</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
