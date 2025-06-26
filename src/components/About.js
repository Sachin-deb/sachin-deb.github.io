import React from 'react';
import profilePicture from '../images/dp.jpg';

function About() {
  return (
    <div className="about">
      <div className="profile-picture-container">
        <img src={profilePicture} alt="Sachin Deb" className="profile-picture" />
      </div>
      <h2>Sachin Deb</h2>
      <p>Level-2 Software Engineer at Chaldal.tech</p>
      <p>
        I specialize in full-stack development, competitive programming. 
        My work focuses on delivering scalable and efficient software solutions.
      </p>
      <h3>Research and Interests</h3>
      <ul className="interests-list">
        <li>Undergraduate research focused on federated learning.</li>
        <li>Interested in pursuing a PhD in Federated Learning, Human-Computer Interaction, Software Engineering.</li>
      </ul>
      <h3> Teaching Experience </h3>
      <ul className="interests-list">
        <li>Competitive Programming Trainer: Bangladesh University of Business and Technology.</li>
        <li>Competitive Programming Trainer: International University of Business Agriculture and Technology.</li>
    </ul>
    </div>
  );
}

export default About;
