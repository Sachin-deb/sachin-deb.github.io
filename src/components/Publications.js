import React from 'react';
import Section from './Section';
import Authors from './Authors';
import { profile, publications } from '../data';

function Publications() {
  return (
    <Section id="publications" title="Publications & Preprints">
      <ol className="pubs">
        {publications.map((p) => (
          <li key={p.title} className="pub">
            <p className="pub-title">{p.title}</p>
            <Authors names={p.authors} />
            <p className="pub-venue">{p.venue}</p>
            <div className="pill-links">
              {p.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a>
              ))}
              <a href={`#${p.project}`}>Project summary</a>
            </div>
          </li>
        ))}
      </ol>
      <p className="muted">
        Full list on{' '}
        <a href={profile.links.scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>.
      </p>
    </Section>
  );
}

export default Publications;
