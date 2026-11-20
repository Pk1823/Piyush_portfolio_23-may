const TECH_STACK = [
  { name: 'C / C++', badge: 'DSA' },
  { name: 'React', badge: 'Frontend' },
  { name: 'JavaScript', badge: 'ES6+' },
  { name: 'HTML & CSS', badge: 'Web' },
  { name: 'Python', badge: 'AI & Data' },
  { name: 'Linux', badge: 'OS' },
  { name: 'AWS', badge: 'Cloud' },
  { name: 'Google Cloud', badge: 'Diamond' },
  { name: 'Git & GitHub', badge: 'VCS' },
  { name: 'Data Structures', badge: 'Core' },
  { name: 'Algorithms', badge: 'Problem Solving' },
  { name: 'Tailwind CSS', badge: 'UI' },
  { name: 'MongoDB', badge: 'Database' },
  { name: 'REST APIs', badge: 'Backend' },
]

export default function Marquee() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Duplicate for seamless infinite loop
  const list = [...TECH_STACK, ...TECH_STACK]

  return (
    <section className="skills-strip" aria-label="Tech Stack Ribbon">
      <a
        href="#about"
        className="skills-strip__label"
        onClick={(e) => { e.preventDefault(); scrollTo('about') }}
      >
        <span>Skills</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>

      <div className="marquee">
        <ul className="marquee__track">
          {list.map((item, index) => (
            <li key={`${item.name}-${index}`}>
              <span className="marquee__badge">{item.badge}</span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
