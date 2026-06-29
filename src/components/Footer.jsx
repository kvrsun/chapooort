import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link className="brand footer__brand" to="/">LUXSY</Link>
          <p>luxsy.space</p>
        </div>
        <div className="footer__links" aria-label="Social links">
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:consult@luxsy.space">Email</a>
        </div>
        <p className="footer__copyright">© {new Date().getFullYear()} LUXSY. All rights reserved.</p>
      </div>
    </footer>
  );
}
