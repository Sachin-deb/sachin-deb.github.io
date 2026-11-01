import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import portrait from '../images/sachinde.png';
import { profile } from '../data';

function Hero() {
  const { links } = profile;
  const contacts = [
    { label: 'Email', href: `mailto:${profile.email}`, icon: <FaEnvelope /> },
    { label: 'Google Scholar', href: links.scholar, icon: <SiGooglescholar /> },
    { label: 'GitHub', href: links.github, icon: <FaGithub /> },
    { label: 'LinkedIn', href: links.linkedin, icon: <FaLinkedin /> },
    { label: 'CV', href: profile.cv, icon: <FaFileAlt /> },
  ];

  return (
    <section className="hero" id="top">
      <img src={portrait} alt={profile.name} className="hero-photo" width="176" height="176" />
      <div className="hero-body">
        <h1>{profile.name}</h1>
        <p className="hero-role">
          {profile.title} · {profile.affiliation}
        </p>
        <p className="hero-lab">
          {profile.lab} · Advised by {profile.advisor}
        </p>

        <p className="hero-tagline">{profile.tagline}</p>

        <p className="hero-bio">
          I adapt pretrained models for <strong>3D medical imaging</strong>,{' '}
          <strong>wearable and contactless physiological sensing</strong>, and{' '}
          <strong>clinical language</strong> to health tasks where labels are scarce — and I test
          whether results hold for new people, new cohorts, and under-represented subgroups. Current
          work spans interpretable stress and craving detection in opioid use disorder, CT-based
          bladder cancer staging with <strong>Mayo Clinic</strong>, zero-shot wearable sensing, and
          the theory of fair parameter-efficient fine-tuning. Before my Ph.D., I shipped production
          recommendation and search systems as a software engineer at a Y Combinator-backed startup.
        </p>

        <ul className="hero-interests">
          {profile.interests.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>

        <div className="hero-links">
          {contacts.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
              {c.icon}
              <span>{c.label}</span>
            </a>
          ))}
        </div>
        <p className="hero-email">{profile.email}</p>
      </div>
    </section>
  );
}

export default Hero;
