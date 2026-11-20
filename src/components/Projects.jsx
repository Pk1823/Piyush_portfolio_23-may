import { FEATURED_PROJECTS } from '../data/profile'
import { LINKS } from '../data/links'

const COVERS = ['cover--teal', 'cover--violet', 'cover--electric', 'cover--lavender', 'cover--lime']

export default function Projects({ repos, loading }) {
  const githubProjects = (repos ?? [])
    .filter((r) => !r.fork || r.description)
    .filter((r) => r.name !== 'Pk1823')
    .filter((r) => !FEATURED_PROJECTS.some((f) => f.repo === r.name))
    .slice(0, 4)
    .map((r, idx) => ({
      id: r.id,
      name: r.name,
      repo: r.name,
      description: r.description || 'Open source software and full-stack development project.',
      language: r.language || 'Code',
      tags: r.language ? [r.language] : ['Open Source'],
      github: r.html_url,
      cover: COVERS[(idx + 2) % COVERS.length],
      year: '2025 – 2026',
    }))

  const allProjects = [
    {
      id: 'tncc',
      name: 'TNCC · SARECM',
      org: 'College Technical Club Platform',
      repo: 'tncc-sarecm',
      description: 'Official club website built for Tech & Coding Club (TnCC). Automated member registration workflows, Google Sheets sync, and technical session schedules.',
      language: 'JavaScript / HTML',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Google Apps Script'],
      github: 'https://github.com/Pk1823/tncc-sarecm',
      cover: 'cover--teal',
      year: '2026',
    },
    {
      id: 'gdgoc',
      name: 'Setu · GDG On Campus',
      org: 'GDG TechSprint · AI Assistant',
      repo: 'GDGoc',
      description: 'AI-powered Academic Recall Assistant utilizing Google Gemini and Retrieval-Augmented Generation (RAG) for localized syllabus recall and interactive student notes.',
      language: 'Python / Gemini',
      tags: ['Python', 'Google Gemini', 'RAG', 'Vector Search'],
      github: 'https://github.com/Pk1823/GDGoc',
      cover: 'cover--violet',
      year: '2025',
    },
    {
      id: 'eventshub',
      name: 'EventsHub · AI Platform',
      org: 'Hackathon & Event Management',
      repo: 'EventsHub',
      description: 'Full-stack platform for discovering hackathons, team collaboration, progress tracking, and personalized AI-powered event recommendations with JWT auth.',
      language: 'Full Stack',
      tags: ['React', 'Node.js', 'MongoDB', 'JWT Auth'],
      github: LINKS.github,
      cover: 'cover--electric',
      year: '2026',
    },
    ...githubProjects,
  ]

  return (
    <section id="projects" className="section section--mist">
      <div className="container">
        <div className="section-head">
          <div className="section-head__title">
            <span className="eyebrow eyebrow--lime">Featured projects</span>
            <h2 className="h2">Things I&apos;ve shipped</h2>
          </div>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--sm"
          >
            All GitHub repos <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>

        <div className="projects-grid">
          {allProjects.map((project, idx) => (
            <article key={project.id ?? project.name} className="project-card">
              <div className={`project-card__media ${project.cover || COVERS[idx % COVERS.length]}`}>
                <div className="project-card__icon-wrap">
                  <span>&lt;/&gt;</span>
                  <span>{project.name}</span>
                </div>
                <span className="project-card__year">{project.year || '2026'}</span>
              </div>

              <div className="project-card__body">
                <p className="project-card__org">{project.org || 'Open Source Project'}</p>
                <h3 className="h3">{project.name}</h3>
                <p className="project-card__desc">{project.description}</p>

                <div className="tags">
                  {project.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
