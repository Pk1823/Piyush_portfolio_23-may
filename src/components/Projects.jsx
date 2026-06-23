import { FEATURED_PROJECTS } from '../data/profile'

const LANG_COLORS = {
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#264de4',
  Java: '#b07219',
  C: '#555555',
  'C++': '#f34b7d',
}

function getLangColor(lang) {
  return LANG_COLORS[lang] ?? '#818cf8'
}

function ProjectCard({ project, isFeatured }) {
  return (
    <article className={`project-card glass${isFeatured ? ' project-card--featured' : ''}`}>
      {isFeatured && <span className="project-card__ribbon">⭐ Featured</span>}
      <div className="project-card__top">
        <svg className="project-card__icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 01-.75-.75v-3.5a.75.75 0 00-.75-.75h-3.5a.75.75 0 00-.75.75v3.5a.75.75 0 01-.75.75H4.5a2.5 2.5 0 01-2-4.5zm2.5-1a1 1 0 00-1 1v11.5a1 1 0 001 1h1.5v-3.5A1.5 1.5 0 018.75 9h3.5A1.5 1.5 0 0113.75 10.5v3.5h1.5a1 1 0 001-1V1.75a.25.25 0 00-.25-.25H4.5z" />
        </svg>
        <span className="project-card__name">{project.name}</span>
      </div>
      <p className="project-card__desc">{project.description}</p>
      {project.tags && (
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag tag--sm">{tag}</span>
          ))}
        </div>
      )}
      <div className="project-card__footer">
        {project.language && (
          <span className="project-card__lang">
            <span className="project-card__lang-dot" style={{ background: getLangColor(project.language) }} />
            {project.language}
          </span>
        )}
        <span className="project-card__repo mono">{project.repo}</span>
      </div>
    </article>
  )
}

export default function Projects({ repos, loading }) {
  const githubProjects = (repos ?? [])
    .filter((r) => !r.fork || r.description)
    .filter((r) => r.name !== 'Pk1823')
    .filter((r) => !FEATURED_PROJECTS.some((f) => f.repo === r.name))
    .slice(0, 4)
    .map((r) => ({
      id: r.id,
      name: r.name,
      repo: r.name,
      description: r.description || 'No description provided.',
      language: r.language,
      tags: r.language ? [r.language] : [],
    }))

  const allProjects = [
    ...FEATURED_PROJECTS,
    ...githubProjects,
  ]

  return (
    <section id="projects" className="section projects">
      <div className="section__header">
        <span className="section__tag">Projects</span>
        <h2>Featured work &amp; GitHub repositories</h2>
        <p className="section__sub">TNCC college project highlighted · synced live from GitHub</p>
      </div>

      {loading ? (
        <div className="projects__grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="project-card project-card--skeleton glass" />
          ))}
        </div>
      ) : (
        <div className="projects__grid">
          {allProjects.map((project) => (
            <ProjectCard
              key={project.id ?? project.repo}
              project={project}
              isFeatured={project.featured}
            />
          ))}
        </div>
      )}
    </section>
  )
}
