import React from 'react';
import luxsyLogo from '../assets/luxsyLogoDataUri.js';

export default function Contact() {
  return (
    <section className="page-hero contact-page">
      <div className="container">
        <div className="contact-hero__intro fade-up" aria-labelledby="contact-heading">
          <img className="contact-hero__mark" src={luxsyLogo} alt="LUXSY" />
          <p className="eyebrow">Contact</p>
          <h1 id="contact-heading">Direct consultation for considered spaces.</h1>
        </div>

        <div className="contact-grid fade-up" aria-label="LUXSY contact details">
          <p className="eyebrow">Email</p>
          <a href="mailto:consult@luxsy.space">consult@luxsy.space</a>

          <p className="eyebrow">Phone</p>
          <a href="tel:0774051384">0774051384</a>
        </div>
      </div>
    </section>
  );
}
