import React, { useState } from 'react';
import Section from './Section';

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const experiences = [
    {
      company: "Chaldal Engineering",
      title: "Level-2 Software Engineer",
      duration: "June 2024 – Present",
      summary:
        "Built scalable backend systems and mobile features, improving delivery, search, performance, and reliability.",
      details: (
        <div className="experience-details-content">
          <h4>Responsibilities</h4>
          <div className="experience-details-list">
            <div className="experience-item"><span className="bullet-icon">⚡</span>
              <p>Engineered a 10-minute delivery system with WebSocket subscriptions, increasing orders by 20%.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">🌐</span>
              <p>Improved semantic search by integrating multilingual embeddings; reduced null-result queries.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">🛒</span>
              <p>Fixed critical cart synchronization bug, preventing incorrect shipments in multi-market orders.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">📦</span>
              <p>Designed knapsack-based algorithm for socket selection, optimizing shipment speed and efficiency.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">💳</span>
              <p>Contributed to <a href="https://chaldal.com/financing" target="_blank" rel="noopener noreferrer">Financing Project</a>, enabling 50 Crore BDT investment throughput.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">🔧</span>
              <p>Developed microservices for Catalog, Search, and Recommendations on Kubernetes with Azure DevOps CI/CD.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">📱</span>
              <p>Enhanced mobile app performance, reducing screen navigation time from 30s to 5s with MobX + Hermes.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">🧠</span>
              <p>Built a two-tower ML recommender system validated via online A/B testing.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">🔔</span>
              <p>Resolved critical notification bug by stabilizing cache retrieval, improving reliability of updates.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">🧪</span>
              <p>Integrated Appium test automation into CI/CD pipeline, increasing release reliability.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">❌</span>
              <p>Added cancellation reason and complaint features; reduced cancellations by 10% and improved feedback.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">📊</span>
              <p>Built Biniyog.io admin panel to consolidate funding KPIs and investment tracking.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">⚙️</span>
              <p>Designed backend-driven logic expression parser for frontend runtime; reduced redundant deployments by 50%.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">🏷️</span>
              <p>Implemented discount and coupon features, increasing customer engagement by 5%.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      company: "MYSOFT Limited",
      title: "Engineering Intern",
      duration: "Jan 2023 – Apr 2023",
      summary:
        "Developed secure full-stack bookstore modules with Spring Boot and Angular.",
      details: (
        <div className="experience-details-content">
          <h4>Responsibilities</h4>
          <div className="experience-details-list">
            <div className="experience-item"><span className="bullet-icon">🔐</span>
              <p>Implemented secure authentication and session management for online bookstore.</p>
            </div>
            <div className="experience-item"><span className="bullet-icon">📚</span>
              <p>Developed book listing, cart, and seamless checkout modules for full-stack system.</p>
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
            <div
              className="experience-header"
              onClick={() => toggleDropdown(index)}
            >
              <div className="experience-title">
                <h3>{experience.company}: {experience.title}</h3>
                <span className="dropdown-icon">{activeIndex === index ? "▲" : "▼"}</span>
              </div>
              <p className="experience-duration">{experience.duration}</p>
              <p className="experience-summary">{experience.summary}</p>
            </div>
            {activeIndex === index && (
              <div className="experience-details">{experience.details}</div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
