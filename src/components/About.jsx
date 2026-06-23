import { PROFILE, PROFILE_IMAGE } from '../data/profile'

export default function About({ github, leetcode }) {
  const lcTags = [
    ...(leetcode?.tagProblemCounts?.fundamental ?? []),
    ...(leetcode?.tagProblemCounts?.intermediate ?? []),
  ]
    .sort((a, b) => b.problemsSolved - a.problemsSolved)
    .slice(0, 6)
    .map((t) => t.tagName)

  const skills = [...new Set([...PROFILE.skills, ...lcTags])]

  return (
    <section id="about" className="section about">
      <div className="section__header">
        <span className="section__tag">About Me</span>
        <h2>Building skills, shipping projects, growing every day</h2>
      </div>

      <div className="about__layout">
        <div className="about__profile-card glass">
          <img
            src={PROFILE_IMAGE}
            alt={PROFILE.name}
            className="about__profile-img"
          />
          <div className="about__profile-info">
            <h3>{PROFILE.name}</h3>
            <p className="about__profile-role">{PROFILE.title}</p>
            <p className="about__profile-loc">{PROFILE.location}</p>
            <button type="button" className="about__linkedin-btn" onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}>
              View Achievements →
            </button>
          </div>
        </div>

        <div className="about__content">
          <div className="about__card glass">
            {PROFILE.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 30)}>{paragraph}</p>
            ))}

            <div className="about__highlights">
              {PROFILE.highlights.map((h) => (
                <div key={h.label} className="about__highlight">
                  <span className="about__highlight-label">{h.label}</span>
                  <span className="about__highlight-value">{h.value}</span>
                  <span className="about__highlight-sub">{h.sub}</span>
                </div>
              ))}
            </div>

            {github && (
              <div className="about__meta">
                <div>
                  <span className="about__meta-value">{github.public_repos}</span>
                  <span className="about__meta-label">Repos</span>
                </div>
                <div>
                  <span className="about__meta-value">{PROFILE.linkedin.connections}+</span>
                  <span className="about__meta-label">LinkedIn</span>
                </div>
                <div>
                  <span className="about__meta-value">{PROFILE.linkedin.followers.toLocaleString()}</span>
                  <span className="about__meta-label">Followers</span>
                </div>
              </div>
            )}
          </div>

          <div className="about__skills glass">
            <h3>Tech Stack &amp; Skills</h3>
            <div className="about__tags">
              {skills.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
            {leetcode?.languageProblemCount?.length > 0 && (
              <p className="about__lang">
                LeetCode primary language:{' '}
                <strong>{leetcode.languageProblemCount[0].languageName}</strong>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
