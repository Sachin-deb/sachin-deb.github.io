import React from 'react';
import { profile } from '../data';

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name} · {profile.email}
      </p>
    </footer>
  );
}

export default Footer;
