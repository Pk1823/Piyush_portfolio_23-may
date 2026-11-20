import { PROFILE, ACHIEVEMENTS } from '../data/profile'
import { LINKS } from '../data/links'

export default function About() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const milestones = ACHIEVEMENTS.linkedinCerts.slice(0, 5)

  return (
    <section id="about" className="section">
      <div className="container duo">
        {/* Left Column: About Me */}
        <div className="duo__about card">
          <span className="eyebrow">About me</span>
          <h2 className="h2">Developer by curiosity, community builder by choice.</h2>

          <p>
            Currently in my 3rd year pursuing <strong>B.Tech in Information Technology</strong> at AKTU / Samrat Ashok Rajkiya Engineering College (SAREC Mirzapur).
          </p>

          <p>
            As an <strong>AWS Global University Program Campus Ambassador</strong> and Founder of <strong>TnCC (Tech &amp; Coding Club)</strong>, I am passionate about bridging the gap between academic theory and practical software engineering, running student bootcamps, and collaborating on high-impact projects.
          </p>

          <p>
            Strong command of <strong>Data Structures &amp; Algorithms in C++</strong>, active on LeetCode and Codeforces, with deep practical interest in <strong>Web Development, Generative AI, and Cloud Architecture</strong>.
          </p>

          <div className="tags" style={{ marginTop: '8px' }}>
            {PROFILE.skills.slice(0, 9).map((s) => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>

          <a
            href="#contact"
            className="link-arrow"
            onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
            style={{ marginTop: '16px' }}
          >
            Let&apos;s build together <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>

        {/* Right Column: Milestones */}
        <div className="duo__ach">
          <div className="section-head" style={{ marginBottom: '20px' }}>
            <div className="section-head__title">
              <span className="eyebrow eyebrow--lime">Milestones so far</span>
              <h2 className="h2" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)' }}>Verified accolades</h2>
            </div>
            <a
              href="#achievements"
              className="btn btn--sm"
              onClick={(e) => { e.preventDefault(); scrollTo('achievements') }}
            >
              View all
            </a>
          </div>

          <div className="ach-list">
            {milestones.map((item) => (
              <article key={item.id} className="ach-item">
                <div className="ach-item__icon">
                  🏆
                </div>
                <div className="ach-item__content">
                  <div className="ach-item__top">
                    <span className="ach-item__issuer">{item.issuer}</span>
                    <span className="ach-item__date">{item.date}</span>
                  </div>
                  <h4 className="ach-item__title">{item.title}</h4>
                  <p className="ach-item__desc">{item.description}</p>
                  {item.image && (
                    <div className="ach-item__thumb">
                      <a href={item.image} target="_blank" rel="noopener noreferrer">
                        <img src={item.image} alt={item.title} loading="lazy" />
                      </a>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
