import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Contact Info</h3>
            <p>
              <strong>Phone:</strong> <a href="tel:+917042971258">+91 7042971258</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:rishitachawla1513@gmail.com">rishitachawla1513@gmail.com</a>
            </p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a href="https://github.com/Rishita-chawla" target="_blank" rel="noreferrer">
                github.com/Rishita-chawla
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a href="https://www.linkedin.com/in/rishita-chawla-a587a2264" target="_blank" rel="noreferrer">
                linkedin.com/in/rishita-chawla
              </a>
            </p>
          </div>

          <div className="contact-card">
            <h3>Connect</h3>
            <p className="muted">I'm active on GitHub and LinkedIn — let's connect and build something great.</p>
            <div className="socials">
              <a href="https://github.com/Rishita-chawla" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/rishita-chawla-a587a2264" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-note">© {new Date().getFullYear()} Rishita Chawla • Portfolio • All Rights Reserved</div>
      </div>
    </section>
  );
}
