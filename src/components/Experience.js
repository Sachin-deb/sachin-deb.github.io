import React from 'react';
import Section from './Section';
import { experience, education } from '../data';

function Experience() {
  return (
    <Section id="experience" title="Experience & Education">
      <div className="timeline">
        {experience.map((e) => (
          <div key={e.org + e.role} className="entry">
            <div className="entry-head">
              <div>
                <h3>{e.org}</h3>
                <p className="entry-role">{e.role}</p>
              </div>
              <div className="entry-meta">
                <span>{e.dates}</span>
                <span>{e.place}</span>
              </div>
            </div>
            <ul className="entry-points">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="subhead">Education</h3>
      <div className="timeline">
        {education.map((e) => (
          <div key={e.school} className="entry">
            <div className="entry-head">
              <div>
                <h3>{e.school}</h3>
                <p className="entry-role">{e.degree}</p>
                <p className="entry-detail">{e.detail}</p>
              </div>
              <div className="entry-meta">
                <span>{e.dates}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
