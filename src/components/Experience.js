import React, { useState } from 'react';
import Section from './Section';

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const experiences = [
    {
      company: "Chaldal",
      title: "Level-2 Software Engineer",
      duration: "June 2024 – Present",
      summary: "Led and contributed to high-impact backend and mobile features in a fast-paced production environment.",
      details: (
        <div className="experience-details-content">
          <h4>Responsibilities</h4>
          <div className="experience-details-list">
            <div className="experience-item">
              <span className="bullet-icon">⚡</span>
              <p>Engineered a 10-minute delivery system with WebSocket subscriptions, increasing order count by 20%.</p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">📦</span>
              <p>Designed a knapsack-based algorithm for optimal socket selection in order delivery.</p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">💳</span>
              <p>Contributed to both frontend and backend of the <a href="https://chaldal.com/financing" target="_blank" rel="noopener noreferrer">Financing Project</a>, enabling 50 Crore BDT investment throughput.</p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">🧠</span>
              <p>Built ML-based personalized recommendation system using two-tower architecture validated with A/B testing.</p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">📱</span>
              <p>Improved mobile performance by reducing screen transition time from 30s to 5s using MobX and Hermes engine.</p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">🔧</span>
              <p>Built microservices for catalog, search, and recommendation with CI/CD on Azure DevOps and Kubernetes.</p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">🧪</span>
              <p>Integrated Appium-based test automation into the mobile CI/CD pipeline.</p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">🛍️</span>
              <p>Designed discount, coupon, cancellation reason, and complaint features reducing order drops by 10%.</p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">📊</span>
              <p>Built Biniyog.io admin panel to track funding KPIs, and designed runtime logic parser to avoid redundant deployments.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      company: "MySoft Ltd.",
      title: "Software Engineer Intern",
      duration: "Jan 2023 – Apr 2023",
      summary: "Developed and integrated secure backend features for a digital bookstore during internship.",
      details: (
        <div className="experience-details-content">
          <h4>Responsibilities</h4>
          <div className="experience-details-list">
            <div className="experience-item">
              <span className="bullet-icon">🔐</span>
              <p>Implemented secure authentication and session management features using Spring Boot.</p>
            </div>
            <div className="experience-item">
              <span className="bullet-icon">📚</span>
              <p>Built modules for book listing, cart management, and checkout flow in a full-stack environment.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section title="Software Industry Experience">
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header" onClick={() => toggleDropdown(index)}>
              <div className="experience-title">
                <h3>{experience.company}: {experience.title}</h3>
                <span className="dropdown-icon">{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              <p className="experience-duration">{experience.duration}</p>
              <p className="experience-summary">{experience.summary}</p>
            </div>
            {activeIndex === index && (
              <div className="experience-details">
                {experience.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
