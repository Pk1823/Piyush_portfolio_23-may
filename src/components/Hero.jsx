import { PROFILE, PROFILE_IMAGE } from '../data/profile'
import TypingText from './TypingText'

const SOCIAL_NAV = [
  { name: 'Stats', section: 'stats', icon: '📊' },
  { name: 'Achievements', section: 'achievements', icon: '🏆' },
  { name: 'Projects', section: 'projects', icon: '💻' },
  { name: 'Contact', section: 'contact', icon: '✉️' },
]

export default function Hero({ github, leetcode, loading }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero__aurora hero__aurora--1" aria-hidden="true" />
      <div className="hero__aurora hero__aurora--2" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__pulse" />
          Open to internships &amp; collaborations
        </div>

        <div className="hero__main">
          <div className="hero__text">
            <p className="hero__greeting">Hello, I&apos;m</p>
            <h1 className="hero__name">{PROFILE.name}</h1>
            <p className="hero__role-line">
              I&apos;m a <span className="gradient-text"><TypingText words={PROFILE.roles} /></span>
            </p>
            <p className="hero__title">{PROFILE.tagline}</p>

            <div className="hero__chips">
              <span className="hero__chip">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {PROFILE.location}
              </span>
              <span className="hero__chip hero__chip--edu">{PROFILE.education}</span>
            </div>

            <div className="hero__actions">
              <button type="button" className="btn btn--primary" onClick={() => scrollTo('achievements')}>
                View Achievements
              </button>
              <button type="button" className="btn btn--ghost" onClick={() => scrollTo('projects')}>
                See My Work
              </button>
            </div>

            <div className="hero__socials">
              {SOCIAL_NAV.map((s) => (
                <button
                  key={s.name}
                  type="button"
                  className="hero__social-link"
                  aria-label={`Go to ${s.name}`}
                  title={s.name}
                  onClick={() => scrollTo(s.section)}
                >
                  <span className="hero__social-emoji">{s.icon}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__photo-frame">
              <div className="hero__photo-orbit" aria-hidden="true" />
              <div className="hero__photo-ring">
                {loading ? (
                  <div className="hero__avatar-skeleton" />
                ) : (
                  <img
                    src={PROFILE_IMAGE}
                    alt={PROFILE.name}
                    className="hero__avatar"
                    loading="eager"
                    decoding="async"
                  />
                )}
              </div>
              <div className="hero__photo-badge">
                <span className="hero__photo-badge-dot" />
                3rd Year · IT · AKTU
              </div>
            </div>

            <div className="hero__float-card hero__float-card--1">
              <span className="mono">{PROFILE.googleSkills.points.toLocaleString()}</span>
              <span>Google Skill Points</span>
            </div>
            <div className="hero__float-card hero__float-card--2">
              <span className="mono">{github?.public_repos ?? '—'}</span>
              <span>GitHub Repos</span>
            </div>
            <div className="hero__float-card hero__float-card--3">
              <span className="mono">
                {leetcode?.submitStats?.acSubmissionNum?.find((s) => s.difficulty === 'All')?.count ?? '—'}
              </span>
              <span>LeetCode Solved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
