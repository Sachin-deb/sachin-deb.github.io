import React from 'react';

function Section({ id, title, intro, children }) {
  return (
    <section className="section" id={id}>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
      {children}
    </section>
  );
}

export default Section;
