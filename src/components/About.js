import React from 'react';
import profilePicture from '../images/dp.jpg';

function About() {
  return (
    <div className="about">
      <div className="profile-picture-container">
        <img src={profilePicture} alt="Sachin Deb" className="profile-picture" />
      </div>
      <h2>Sachin Deb</h2>
      <p>Ph.D. Student in Computer Science at Arizona State University</p>
      <p>
        I am a researcher and software engineer with interests in{" "}
        <strong>multimodal foundation models</strong>,{" "}
        <strong>vision–language reasoning</strong>,{" "}
        <strong>federated learning</strong>, and the{" "}
        <strong>robustness of neural networks</strong>. 
        My professional experience includes building scalable backend and mobile systems at{" "}
        <strong>Chaldal Engineering</strong> and developing secure full-stack applications during my{" "}
        <strong>internship at MYSOFT Limited</strong>.
      </p>
      <h3>Research Highlights</h3>
      <ul className="interests-list">
        <li>
          <strong>Ph.D. Research (ASU):</strong> Multimodal large language models and formal
          verification to ensure robustness and safety.
        </li>
        <li>
          <strong>Undergraduate Thesis (BUET):</strong> Hybrid optimization methods for
          federated learning on Non-IID datasets, achieving 71% accuracy vs. 61–65% with FedAvg.
        </li>
      </ul>
      <h3>Teaching Experience</h3>
      <ul className="interests-list">
        <li>
          Competitive Programming Trainer at Bangladesh University of Business and Technology (2023–2025).
        </li>
        <li>
          Competitive Programming Trainer at International University of Business Agriculture and Technology (2024–2025).
        </li>
      </ul>
      <h3>Competitive Programming</h3>
      <ul className="interests-list">
        <li>ICPC: 2nd (Asia Dhaka Preliminary 2023), 7th (Asia Dhaka Regional 2022).</li>
        <li>Google Kick Start: 310th (2022), 477th (2021).</li>
        <li>Profiles: Codeforces (Max 2002), LeetCode (Max 2309), AtCoder (Max 1366), CodeChef (Max 2103).</li>
      </ul>
    </div>
  );
}

export default About;
