export default function BentoHighlights() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bento container" aria-label="Featured Highlights">
      {/* Bento Card 1: Campus Leadership & Open Source */}
      <a
        href="#experience"
        className="bento__os card"
        onClick={(e) => { e.preventDefault(); scrollTo('experience') }}
      >
        <div className="bento__head">
          <span className="eyebrow">Campus Leadership</span>
          <span className="bento__go" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>
          </span>
        </div>

        <p className="label muted">AWS Global University Program · TnCC SAREC Mirzapur</p>
        <h2 className="h2">Empowering student developers &amp; building technical communities in the open.</h2>
        <p className="muted">
          Active AWS Campus Ambassador and Founder of TnCC (Tech &amp; Coding Club), organizing technical workshops, cloud learning bootcamps, and hackathons reaching hundreds of student builders.
        </p>

        <div className="bento__stats">
          <div>
            <p className="stat__value">500+</p>
            <p className="stat__label">Students Impacted</p>
          </div>
          <div>
            <p className="stat__value">15,860+</p>
            <p className="stat__label">Google Skill Points</p>
          </div>
          <div>
            <p className="stat__value">5,000+</p>
            <p className="stat__label">LinkedIn Network</p>
          </div>
        </div>

        <span className="link-arrow">
          Explore leadership experience <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </a>

      {/* Bento Card 2: SIH 2026 & Open Source Day */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: 'clamp(22px, 3vw, 32px)' }}>
        <div className="bento__head">
          <span className="eyebrow eyebrow--lime">Hackathon &amp; Community Wins</span>
          <a
            href="#achievements"
            className="bento__go"
            onClick={(e) => { e.preventDefault(); scrollTo('achievements') }}
            aria-label="View Achievements"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>
          </a>
        </div>

        <p className="label muted">Ministry of Education · AICTE · GDG Prayagraj</p>
        <h3 className="h3">SIH 2026 Core Organizer &amp; Open Source Day Co-Organiser</h3>

        <div className="bento__thumb">
          <img
            src="/images/certificates/open-source-day-cert.jpg"
            alt="Open Source Day Certificate &amp; Co-organiser ID badge"
            loading="lazy"
          />
        </div>

        <p className="muted" style={{ fontSize: '0.9rem' }}>
          Recognized by Ministry of Education for SIH 2026, Core Organizer for Open Source Day with Google Developer Groups Prayagraj, and 3rd Rank in FlowJam Hackathon.
        </p>

        <a
          href="#achievements"
          className="link-arrow"
          onClick={(e) => { e.preventDefault(); scrollTo('achievements') }}
        >
          View all verified milestones <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </section>
  )
}

