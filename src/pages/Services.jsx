import Button from '../components/Button.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { services } from '../data/services.js';

export default function Services() {
  return (
    <>
      <section className="page-hero page-section">
        <div className="container narrow fade-up">
          <p className="eyebrow">Services</p>
          <h1>Digital foundations for businesses that need to look consistent, credible, and prepared.</h1>
          <p>Choose a single service or build a complete presence with LUXSY. Every path is designed to move clearly toward a project conversation.</p>
          <Button to="/contact">Start a Project</Button>
        </div>
      </section>
      <section className="page-section section--muted">
        <div className="container service-list">
          {services.map((service, index) => (
            <article className="service-detail fade-up" key={service.title}>
              <div>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <div>
                <ul>
                  {service.details.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Button to="/contact" variant="text">Discuss this service</Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="page-section cta-section">
        <div className="container cta-panel fade-up">
          <SectionHeader title="Need the right mix of services?" />
          <Button to="/contact">Contact LUXSY</Button>
        </div>
      </section>
    </>
  );
}
