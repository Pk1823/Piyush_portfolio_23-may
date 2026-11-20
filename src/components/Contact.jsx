import { PROFILE } from '../data/profile'
import { LINKS } from '../data/links'

export default function Contact() {
  return (
    <section id="contact" className="connect-band grid-paper--violet">
      <div className="container connect-band__inner">
        <div>
          <p className="label connect-band__label">
            Open to internships, opportunities &amp; collaborations
          </p>
          <h2 className="connect-band__title">
            Let&apos;s build something
            <br />
            amazing together.
          </h2>
        </div>

        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', zIndex: 2 }}>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--lime"
          >
            Connect on LinkedIn <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a
            href="mailto:recmit2024@gmail.com"
            className="btn btn--sunbeam"
          >
            Send Email ✉️
          </a>
        </div>

        {/* Neobrutalist geometric burst icon */}
        <svg
          className="connect-band__burst"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path d="M50 0l9 22 21-12-6 24 24 3-19 15 19 15-24 3 6 24-21-12-9 22-9-22-21 12 6-24-24-3 19-15L2 37l24-3-6-24 21 12z" />
        </svg>
      </div>
    </section>
  )
}
