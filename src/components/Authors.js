import React from 'react';
import { profile } from '../data';

function Authors({ names }) {
  return (
    <p className="authors">
      {names.map((n, i) => (
        <React.Fragment key={n}>
          {n === profile.name ? <strong>{n}</strong> : n}
          {i < names.length - 1 && ', '}
        </React.Fragment>
      ))}
    </p>
  );
}

export default Authors;
