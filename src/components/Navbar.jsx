import { PROFILE } from '../data/profile'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'stats', label: 'Stats' },
]

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      <div className="site-header__status">
        <div>
          <span className="site-header__status-dot" />
          <span>Available for Summer Internships &amp; Open Source Collaborations</span>
        </div>
        <span style={{ opacity: 0.85 }}>📍 India · Remote</span>
      </div>

      <div className="site-header__bar">
        <a href="#home" className="brand" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
          <span className="brand__mark">&lt;/&gt;</span>
          <span className="brand__name">piyush<span className="brand__dot">.</span></span>
        </a>

        <nav className="site-nav" aria-label="Main Navigation">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.id) }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="header-cta"
          onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
        >
          Connect <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </header>
  )
}
