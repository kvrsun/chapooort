import React from 'react';
import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { services } from '../data/services.js';
import bstrdAsterisk from '../assets/bstrd-asterisk.svg';

export default function Home() {
  return (
    <>
      <section className="hero page-section">
        <div className="container hero__grid">
          <div className="hero__content fade-up">
            <p className="eyebrow">Boutique digital studio</p>
            <h1>Building Digital Presence That Feels Intentional.</h1>
            <p className="hero__lead">LUXSY helps businesses create professional, consistent digital experiences through websites, branding, content, and business systems.</p>
            <div className="button-row">
              <Button to="/services">View Services</Button>
              <Button to="/contact" variant="secondary">Start a Project</Button>
            </div>
          </div>
          <aside className="hero__panel fade-up" aria-label="LUXSY focus areas">
            <span>Presence</span>
            <span>Branding</span>
            <span>Systems</span>
            <span>Content</span>
          </aside>
        </div>
      </section>

      <section className="page-section section--line">
        <div className="container two-column">
          <SectionHeader eyebrow="About LUXSY" title="A considered partner for the way your business appears online.">
            We help businesses establish and maintain a professional digital presence with clarity, consistency, and long-term usefulness.
          </SectionHeader>
          <div className="body-copy fade-up">
            <p>LUXSY brings websites, visual identity, social content, and internal systems into one cohesive foundation. The work is measured, practical, and designed to keep serving the business after launch.</p>
            <p>Every project is shaped around professional presentation: what your audience sees, how your team uses the assets, and how consistently the brand can show up over time.</p>
          </div>
        </div>
      </section>

      <section className="page-section section--muted">
        <div className="container">
          <SectionHeader eyebrow="What We Do" title="Services built around presentation and continuity." />
          <div className="card-grid">
            {services.map((service) => (
              <article className="service-card fade-up" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Button to="/contact" variant="text">Contact LUXSY</Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container case-study case-study--featured fade-up">
          <div className="case-study__brand">
            <img className="case-study__logo" src={bstrdAsterisk} alt="BSTRD pink asterisk logo" />
            <div>
              <p className="eyebrow">Featured Client</p>
              <h2>BSTRD</h2>
            </div>
          </div>
          <div className="case-study__content">
            <p> BSTRD partnered with Luxusy to overcome a broken digital presence and low market reach. We revitalized their brand identity and launched a clean, custom-branded website featuring personalized touchpoints designed to drive meaningful customer engagement.</p>
            <div className="button-row case-study__links" aria-label="BSTRD links">
              <Button href="https://btsrd.shop">Visit Store</Button>
              <Button href="https://instagram.com/bstrd.zw" variant="secondary">Instagram</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section--line">
        <div className="container">
          <SectionHeader eyebrow="Process" title="Simple, structured, and easy to maintain." />
          <div className="process-grid">
            <article className="process-step fade-up">
              <span>01</span>
              <h3>Discovery</h3>
              <p>Understanding the business, goals and audience.</p>
            </article>
            <article className="process-step fade-up">
              <span>02</span>
              <h3>Design</h3>
              <p>Building a cohesive digital identity.</p>
            </article>
            <article className="process-step fade-up">
              <span>03</span>
              <h3>Delivery</h3>
              <p>Providing systems and assets that remain useful after launch.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section cta-section">
        <div className="container cta-panel fade-up">
          <h2>Ready to Build Something Better?</h2>
          <Button to="/contact">Start a Project</Button>
        </div>
      </section>
    </>
  );
}
