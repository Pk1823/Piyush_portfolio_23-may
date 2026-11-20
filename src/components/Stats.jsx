import { PROFILE } from '../data/profile'
import { LINKS } from '../data/links'

export default function Stats({ github, leetcode, codeforces, loading }) {
  const statsList = [
    {
      label: 'LinkedIn Community',
      value: `${PROFILE.linkedin.followers.toLocaleString()}+`,
      sub: `${PROFILE.linkedin.connections}+ Connections`,
      link: LINKS.linkedin,
    },
    {
      label: 'GitHub Repositories',
      value: loading ? '...' : (github?.public_repos ?? '12+'),
      sub: 'Open source & technical codebases',
      link: LINKS.github,
    },
    {
      label: 'LeetCode Solved',
      value: loading ? '...' : (leetcode?.totalSolved ?? '150+'),
      sub: 'Data structures & algorithms',
      link: LINKS.leetcode,
    },
    {
      label: 'Google Skills Points',
      value: PROFILE.googleSkills.points.toLocaleString(),
      sub: `${PROFILE.googleSkills.league} Learner`,
      link: PROFILE.googleSkills.profileUrl,
    },
  ]

  return (
    <section id="stats" className="section section--mist">
      <div className="container">
        <div className="section-head">
          <div className="section-head__title">
            <span className="eyebrow">Real-time metrics</span>
            <h2 className="h2">Coding Activity &amp; Live Stats</h2>
          </div>
          <span className="label muted">Synced with live developer APIs</span>
        </div>

        <div className="stats-grid">
          {statsList.map((st) => (
            <a
              key={st.label}
              href={st.link}
              target="_blank"
              rel="noopener noreferrer"
              className="stat-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <p className="stat-card__number">{st.value}</p>
              <p className="stat-card__label">{st.label}</p>
              <p className="stat-card__sub">{st.sub}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
