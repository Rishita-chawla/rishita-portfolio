import React from "react";
import {
  FaDatabase,        // DBMS
  FaChartLine,       // Data analysis
  FaChartBar,        // Data visualization
  FaDesktop,         // OS
  FaCubes,           // OOP
  FaProjectDiagram,  // DSA (graph/structure)
} from "react-icons/fa";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "C++",
  "Python",
  "Java",
  "MongoDB",
  "MySQL",
  "TensorFlow",
  "Scikit Learn",
  "Django",
  "FastAPI",
  "Data Analysis",
  "Data Visualization",
  "Operating Systems",
  "DBMS",
  "Git",
  "GitHub",
  "OOP",
  "DSA",
];

const icons = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Scikit Learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  Django: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
};

// map for concepts with no Devicon SVG
const conceptIcons = {
  "Data Analysis": <FaChartLine color="#22c55e" />,
  "Data Visualization": <FaChartBar color="#fbbf24"/>,
  "Operating Systems": <FaDesktop  color="#e5e7eb" />,
  DBMS: <FaDatabase color="#a855f7" />,
  OOP: <FaCubes color="#ec4899"/>,
  DSA: <FaProjectDiagram color="#eab308"/>,
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => {
            const url = icons[s];
            const ConceptIcon = conceptIcons[s];

            return (
              <div className="skill-card" key={s}>
                {url ? (
                  <img
                    src={url}
                    alt={s}
                    className="skill-icon"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : ConceptIcon ? (
                  <span className="skill-icon">{ConceptIcon}</span>
                ) : null}
                <div className="skill-name">{s}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
