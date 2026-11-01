import React from 'react';
import Section from './Section';
import { honors, ratings, service, skills, otherProjects } from '../data';

function Honors() {
  return (
    <>
      <Section id="honors" title="Honors & Competitive Programming">
        <ul className="rows">
          {honors.map((h, i) => (
            <li key={i}>
              <span className="row-key">{h.what}</span>
              <span className="row-text">
                {h.url ? <a href={h.url} target="_blank" rel="noopener noreferrer">{h.where}</a> : h.where}
              </span>
              <span className="row-date">{h.when}</span>
            </li>
          ))}
        </ul>
        <div className="ratings">
          {ratings.map((r) => (
            <div key={r.site} className="rating">
              <span className="rating-value">{r.value}</span>
              <span className="rating-site">{r.site} peak</span>
            </div>
          ))}
        </div>
      </Section>

      <Section id="service" title="Teaching & Service">
        <ul className="rows">
          {service.map((s, i) => (
            <li key={i}>
              <span className="row-key">{s.role}</span>
              <span className="row-text">{s.where}</span>
              <span className="row-date">{s.when}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Technical Skills">
        <dl className="skills">
          {skills.map((s) => (
            <div key={s.area}>
              <dt>{s.area}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="projects" title="Other Projects">
        <div className="mini-projects">
          {otherProjects.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="mini-project">
              <span className="mini-name">{p.name}</span>
              <span className="mini-tech">{p.tech}</span>
              <span className="mini-text">{p.text}</span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Honors;
