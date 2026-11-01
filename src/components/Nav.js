import React from 'react';
import { profile } from '../data';

const items = [
  ['Research', '#research'],
  ['Publications', '#publications'],
  ['Experience', '#experience'],
  ['Honors', '#honors'],
];

function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-name">{profile.name}</a>
        <nav className="nav-links">
          {items.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="nav-cv">CV</a>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
