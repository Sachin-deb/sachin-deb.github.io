import React from 'react';
import Section from './Section';
import Authors from './Authors';
import { themes, research, publications } from '../data';

function ResearchCard({ project }) {
  const paper = publications.find((p) => p.project === project.id);

  return (
    <article className="project" id={project.id}>
      <div className="project-head">
        <span className="project-status">{project.status}</span>
        <span className="project-area">{project.area}</span>
      </div>
      <h3>{project.title}</h3>
      {paper && <Authors names={paper.authors} />}
      <p className="project-summary">{project.summary}</p>

      {project.metrics && (
        <dl className="metrics">
          {project.metrics.map((m) => (
            <div key={m.label} className="metric">
              <dt>{m.value}</dt>
              <dd>
                {m.label}
                {m.note && <span>{m.note}</span>}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {project.points && (
        <ul className="project-points">
          {project.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}

      {project.links && (
        <div className="pill-links">
          {project.links.map((l) => (
            <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
          ))}
        </div>
      )}
    </article>
  );
}

function Research() {
  return (
    <Section
      id="research"
      title="Research"
      intro="Three questions run through my work: how to adapt foundation models when labels are scarce, how to sense health without a clinic, and how to know a model will still work on the next person."
    >
      <div className="themes">
        {themes.map((t, i) => (
          <div key={t.title} className="theme">
            <span className="theme-num">0{i + 1}</span>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        ))}
      </div>

      <h3 className="subhead">Selected projects</h3>
      {research.map((project) => (
        <ResearchCard key={project.id} project={project} />
      ))}
    </Section>
  );
}

export default Research;
