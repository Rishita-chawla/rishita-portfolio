import React, { useState } from "react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="logo">RC</div>
          <div>
            <div className="name">Rishita Chawla</div>
            <div className="subtitle">Frontend Developer • React • DSA</div>
          </div>
        </div>

        <nav className="nav-links">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="nav-link"
            >
              {link}
            </a>
          ))}
        </nav>

        <button 
          className="hamburger" 
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
