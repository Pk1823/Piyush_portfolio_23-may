import { PROFILE, PROFILE_IMAGE } from '../data/profile'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'stats', label: 'Stats' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar">
      <a href="#home" className="navbar__brand" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
        <img src={PROFILE_IMAGE} alt="" className="navbar__avatar" />
        PK<span className="navbar__dot">.</span>
      </a>
      <nav className="navbar__links">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(item.id) }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button type="button" className="navbar__cta" onClick={() => scrollTo('contact')}>
        {PROFILE.shortName}
      </button>
    </header>
  )
}
