import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <nav className="nav container" aria-label="Primary navigation">
        <Link className="brand" to="/" aria-label="LUXSY home">LUXSY</Link>
        <div className="nav__links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
