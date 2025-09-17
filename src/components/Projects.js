import React, { useState } from 'react';
import Section from './Section';

function Projects() {
  const projects = [
    {
      name: "Plant Disease Detection",
      tech: "TensorFlow, Keras, Python (Google Colab)",
      description:
        "Hybrid CNN model for crop disease diagnostics using the PlantVillage dataset (50k+ images, 38 classes), achieving 92.22% validation accuracy.",
      link: "https://colab.research.google.com/drive/1OC3hHeqJu9GGc5NEMuimviLgq-oAmPZX?usp=sharing",
      details: (
        <>
          <h4>Techniques</h4>
          <ul>
            <li>Inception modules, separable convolutions, batch normalization</li>
            <li>Max pooling layers for feature selection</li>
            <li>Smartphone-based early disease detection for farmers</li>
          </ul>
        </>
      ),
    },
    {
      name: "FoodFly",
      tech: "Node.js, Express, React, MongoDB",
      description:
        "Full-stack food delivery platform with location-aware search, order tracking, and restaurant-side interface.",
      link: "https://github.com/Mamun097/FoodFly",
      details: (
        <>
          <h4>Features</h4>
          <ul>
            <li>Customer, Restaurant, Delivery Person, and Home Kitchen roles</li>
            <li>Browse/search restaurants by name or location</li>
            <li>Manage food items, stock status, and restaurant availability</li>
            <li>Order assignment to delivery personnel by proximity</li>
          </ul>
        </>
      ),
    },
    {
      name: "SQuirreL",
      tech: "Node.js, Express, EJS, Oracle DB",
      description:
        "Feature-rich online bookstore platform with robust admin/user role separation and order processing.",
      link: "https://github.com/TamimEhsan/SQuirreL",
      details: (
        <>
          <h4>Features</h4>
          <ul>
            <li>Admin management of books, authors, and categories</li>
            <li>User browsing, purchasing, and online payments</li>
            <li>Separation of admin and customer workflows</li>
          </ul>
        </>
      ),
    },
    {
      name: "Ray Tracing Renderer",
      tech: "C++",
      description:
        "High-performance ray tracing engine simulating realistic light interactions and material effects.",
      link: "https://github.com/Sachin-deb/Ray-Tracing",
    },
    {
      name: "DX Ball",
      tech: "C + iGraphics",
      description:
        "Lightweight 2D game built with C and iGraphics (OpenGL-based), developed as an early undergraduate project.",
      link: "https://github.com/Sachin-deb/DX-Ball-1---1-Project",
    },
    {
      name: "Compiler",
      tech: "C + YACC/Bison",
      description:
        "Custom compiler with tokenizer, lexical analyzer, and parser, generating executable output efficiently.",
      link: "https://github.com/Sachin-deb/Compiler-Sessional",
    },
    {
      name: "CoderVai — Codeforces Helper",
      tech: "FastAPI, Next.js, CockroachDB",
      description:
        "Customized leaderboard and problem suggestion system for Codeforces contests.",
      link: "https://github.com/Sachin-deb/CoderVaiCodeforcesHelper",
      details: (
        <>
          <h4>Features</h4>
          <ul>
            <li>Custom contest rating calculations</li>
            <li>Personalized insights and problem recommendations</li>
          </ul>
        </>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <Section title="Projects">
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <div
              className="project-header"
              onClick={() => toggleDropdown(index)}
            >
              <strong>{project.name}</strong> ({project.tech})
              <span className="dropdown-icon">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            <p>
              {project.description}{" "}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub/Link
                </a>
              )}
            </p>
            {activeIndex === index && (
              <div className="project-details">{project.details}</div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Projects;
