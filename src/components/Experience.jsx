import { EXPERIENCES } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="section section--mist">
      <div className="container">
        <div className="section-head">
          <div className="section-head__title">
            <span className="eyebrow">Positions of responsibility</span>
            <h2 className="h2">Leadership &amp; Experience</h2>
          </div>
          <span className="label muted">Campus, Hackathons &amp; Community</span>
        </div>

        <div className="exp-grid">
          {EXPERIENCES.map((exp) => (
            <article key={exp.id} className="exp-card">
              <div className="exp-card__top">
                <span className="eyebrow eyebrow--lime" style={{ fontSize: '0.68rem', padding: '4px 8px' }}>
                  {exp.type}
                </span>
                <span className="label muted" style={{ fontSize: '0.75rem' }}>
                  {exp.period}
                </span>
              </div>

              <h3 className="exp-card__role">{exp.title}</h3>
              <p className="exp-card__org">{exp.organization}</p>
              <p className="exp-card__desc">{exp.description}</p>

              {exp.tags && (
                <div className="tags" style={{ marginTop: 'auto' }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
