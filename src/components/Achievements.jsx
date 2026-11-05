import { useState } from 'react'
import { PROFILE, ACHIEVEMENTS } from '../data/profile'

const CATEGORY_COLORS = {
  Cloud: '#4285f4',
  AI: '#a855f7',
  certification: '#f59e0b',
}

function FeaturedCard({ item }) {
  return (
    <article className="achievement-featured glass">
      <div className="achievement-featured__badge">{item.badge}</div>
      <div className="achievement-featured__body">
        <span className="achievement-featured__date mono">{item.date}</span>
        <h3>{item.title}</h3>
        <p className="achievement-featured__issuer">{item.issuer}</p>
        {item.points && (
          <span className="achievement-featured__points mono">{item.points.toLocaleString()} pts</span>
        )}
        <p className="achievement-featured__desc">{item.description}</p>
      </div>
    </article>
  )
}

function LinkedInCertCard({ cert }) {
  return (
    <article className="achievement-linkedin glass">
      <div className="achievement-linkedin__icon">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </div>
      <div className="achievement-linkedin__body">
        <div className="achievement-linkedin__header">
          <span className="achievement-linkedin__source">{cert.source || 'LinkedIn Verified'}</span>
          {cert.image && (
            <a
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              className="achievement-linkedin__view-btn"
              title="View Certificate"
            >
              Certificate ↗
            </a>
          )}
        </div>
        <h3>{cert.title}</h3>
        <p className="achievement-linkedin__issuer">{cert.issuer}</p>
        <span className="achievement-linkedin__date mono">Issued {cert.date}</span>
        <p className="achievement-linkedin__desc">{cert.description}</p>
        {cert.image && (
          <a
            href={cert.image}
            target="_blank"
            rel="noreferrer"
            className="achievement-linkedin__thumb-wrap"
          >
            <img
              src={cert.image}
              alt={`${cert.title} Certificate`}
              className="achievement-linkedin__thumb"
              loading="lazy"
            />
            <span className="achievement-linkedin__thumb-overlay">View Full Certificate ↗</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default function Achievements() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Cloud', 'AI']
  const filteredBadges = filter === 'All'
    ? ACHIEVEMENTS.badges
    : ACHIEVEMENTS.badges.filter((b) => b.category === filter)

  return (
    <section id="achievements" className="section achievements">
      <div className="section__header">
        <span className="section__tag">Achievements</span>
        <h2>Licenses, certificates &amp; skill badges</h2>
        <p className="section__sub">
          Collected from LinkedIn Licenses &amp; Certifications and Google Cloud Skills Boost profile
        </p>
      </div>

      <div className="achievements__summary glass">
        <div className="achievements__summary-item">
          <span className="achievements__summary-value gradient-text">{PROFILE.googleSkills.league}</span>
          <span className="achievements__summary-label">Google Skills Tier</span>
        </div>
        <div className="achievements__summary-item">
          <span className="achievements__summary-value mono">{PROFILE.googleSkills.points.toLocaleString()}</span>
          <span className="achievements__summary-label">Skill Points</span>
        </div>
        <div className="achievements__summary-item">
          <span className="achievements__summary-value">{ACHIEVEMENTS.linkedinCerts.length}</span>
          <span className="achievements__summary-label">LinkedIn Certs</span>
        </div>
        <div className="achievements__summary-item">
          <span className="achievements__summary-value">{ACHIEVEMENTS.badges.length}+</span>
          <span className="achievements__summary-label">Google Badges</span>
        </div>
      </div>

      <h3 className="achievements__subtitle">LinkedIn Licenses &amp; Certifications</h3>
      <div className="achievements__linkedin-grid">
        {ACHIEVEMENTS.linkedinCerts.map((cert) => (
          <LinkedInCertCard key={cert.id} cert={cert} />
        ))}
      </div>

      <h3 className="achievements__subtitle">Featured Google Cloud Achievements</h3>
      <div className="achievements__featured-grid">
        {ACHIEVEMENTS.featured.map((item) => (
          <FeaturedCard key={item.id} item={item} />
        ))}
      </div>

      <div className="achievements__badges-header">
        <h3 className="achievements__subtitle">All Skill Badges</h3>
        <div className="achievements__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`achievements__filter${filter === cat ? ' achievements__filter--active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="achievements__badges-grid">
        {filteredBadges.map((badge) => (
          <div key={badge.title} className="achievement-badge glass">
            <span
              className="achievement-badge__dot"
              style={{ background: CATEGORY_COLORS[badge.category] }}
            />
            <div>
              <p className="achievement-badge__title">{badge.title}</p>
              <span className="achievement-badge__meta mono">{badge.date} · {badge.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
