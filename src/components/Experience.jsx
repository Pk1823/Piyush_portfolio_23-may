import { EXPERIENCES } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__header">
        <span className="section__tag">Experience</span>
        <h2>Leadership &amp; Campus Experience</h2>
        <p className="section__sub">
          Positions of responsibility, ambassador programs &amp; hackathon organization
        </p>
      </div>

      <div className="experience__grid">
        {EXPERIENCES.map((exp) => (
          <article key={exp.id} className="experience-card glass">
            <div className="experience-card__top">
              <span className="experience-card__badge">{exp.type}</span>
              <span className="experience-card__date mono">{exp.period}</span>
            </div>
            <h3 className="experience-card__title">{exp.title}</h3>
            <p className="experience-card__org">{exp.organization}</p>
            <p className="experience-card__desc">{exp.description}</p>
            {exp.tags && (
              <div className="experience-card__tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="tag tag--sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

