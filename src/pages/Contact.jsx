export default function Contact() {
  return (
    <section className="page-hero page-section contact-page">
      <div className="container contact-grid">
        <div className="fade-up">
          <p className="eyebrow">Contact</p>
          <h1>Tell us what you are building.</h1>
          <p>Contact details coming soon. Please reach out through our social channels.</p>
          <div className="contact-links">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:consult@luxsy.space">consult@luxsy.space</a>
          </div>
        </div>
        <form className="contact-form fade-up" aria-label="Project enquiry form">
          <label>
            <span>Name</span>
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            <span>Business Name</span>
            <input type="text" name="businessName" autoComplete="organization" />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            <span>Project Description</span>
            <textarea name="projectDescription" rows="7" required />
          </label>
          <button type="submit">Start a Project</button>
        </form>
      </div>
    </section>
  );
}
