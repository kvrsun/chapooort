import React from 'react';

export default function Contact() {
  return (
    <section className="page-hero contact-page">
      <div className="container contact-page__shell">
        <div className="contact-page__intro fade-up" aria-labelledby="contact-heading">
          <p className="eyebrow">Contact</p>
          <h1 id="contact-heading">Start a clear, considered project conversation.</h1>
          <p>Tell us what you are building, what needs attention, and where a focused digital presence can support your next step.</p>
        </div>

        <div className="contact-card fade-up">
          <div className="contact-card__details" aria-label="LUXSY contact details">
            <div>
              <p className="eyebrow">Email</p>
              <a href="mailto:consult@luxsy.space">consult@luxsy.space</a>
            </div>
            <div>
              <p className="eyebrow">Phone</p>
              <a href="tel:0774051384">0774051384</a>
            </div>
          </div>

          <form className="contact-form" aria-label="Project inquiry form">
            <label>
              Name
              <input type="text" name="name" autoComplete="name" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" name="email" autoComplete="email" placeholder="you@example.com" />
            </label>
            <label>
              Project details
              <textarea name="message" rows="6" placeholder="Briefly share what you need help with." />
            </label>
            <button type="submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
