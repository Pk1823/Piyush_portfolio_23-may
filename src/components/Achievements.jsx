import { ACHIEVEMENTS, PROFILE } from '../data/profile'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-head__title">
            <span className="eyebrow eyebrow--lime">Recognitions &amp; Credentials</span>
            <h2 className="h2">Licenses, Certifications &amp; Awards</h2>
          </div>
          <span className="label muted">Verified On LinkedIn &amp; Hackathon Portals</span>
        </div>

        <div className="exp-grid" style={{ marginBottom: '32px' }}>
          {ACHIEVEMENTS.linkedinCerts.map((cert) => (
            <article key={cert.id} className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="eyebrow" style={{ fontSize: '0.68rem', padding: '4px 8px' }}>
                  {cert.source || 'Verified Credential'}
                </span>
                <span className="label muted" style={{ fontSize: '0.72rem' }}>
                  {cert.date}
                </span>
              </div>

              <h3 className="h3" style={{ fontSize: '1.15rem' }}>{cert.title}</h3>
              <p className="label" style={{ color: 'var(--violet)' }}>{cert.issuer}</p>
              <p className="muted" style={{ fontSize: '0.88rem', lineHeight: '1.55' }}>{cert.description}</p>

              {cert.image && (
                <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bento__thumb"
                    style={{ display: 'block', maxHeight: '140px' }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      style={{ height: '140px', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </a>
                  <div style={{ marginTop: '8px', textAlign: 'right' }}>
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow"
                      style={{ fontSize: '0.78rem' }}
                    >
                      View full document ↗
                    </a>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Google Cloud Badges Ticker / Grid */}
        <div className="card" style={{ padding: '28px', background: 'var(--lavender-soft)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
            <div>
              <span className="eyebrow eyebrow--lime">Google Cloud Skills Boost</span>
              <h3 className="h3" style={{ marginTop: '8px' }}>
                {PROFILE.googleSkills.league} · {PROFILE.googleSkills.points.toLocaleString()} Skill Points
              </h3>
            </div>
            <a
              href={PROFILE.googleSkills.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--sm btn--sunbeam"
            >
              Public Profile ↗
            </a>
          </div>

          <div className="tags">
            {ACHIEVEMENTS.badges.map((b) => (
              <span key={b.title} className="tag" style={{ background: 'var(--surface)', padding: '5px 10px' }}>
                🎖️ {b.title} ({b.date})
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
