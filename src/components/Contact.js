import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>
        If you'd like to get in touch, feel free to connect with me via the following:
      </p>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a
            href="mailto:debsachin5@gmail.com"
            className="contact-link"
          >
            debsachin5@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a
            href="mailto:sachinde@asu.edu"
            className="contact-link"
          >
            sachinde@asu.edu
          </a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://linkedin.com/in/sachin-deb-7810921b6"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/Sachin-deb"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub Profile
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span className="contact-text">+8801316404807 (Bangladesh)</span>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span className="contact-text">+1-623-432-6288 (USA)</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
