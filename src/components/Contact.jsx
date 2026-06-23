import { PROFILE, PROFILE_IMAGE } from '../data/profile'

const PLATFORMS = [
  {
    label: 'LinkedIn',
    value: 'piyush-k-4302ba226',
    desc: `${PROFILE.linkedin.followers.toLocaleString()} followers · ${PROFILE.linkedin.connections}+ connections`,
    primary: true,
  },
  {
    label: 'GitHub',
    value: 'Pk1823',
    desc: 'Repositories & open source contributions',
  },
  {
    label: 'LeetCode',
    value: 'pk2428',
    desc: 'DSA practice & problem solving',
  },
  {
    label: 'Codeforces',
    value: 'contri25',
    desc: 'Competitive programming contests',
  },
]

export default function Contact() {
  const copyHandle = (value) => {
    navigator.clipboard?.writeText(value)
  }

  return (
    <section id="contact" className="section contact">
      <div className="contact__wrapper glass">
        <div className="contact__top">
          <img src={PROFILE_IMAGE} alt={PROFILE.name} className="contact__avatar" />
          <div className="section__header section__header--center">
            <span className="section__tag">Contact</span>
            <h2>Let&apos;s build something together</h2>
            <p className="section__sub">
              3rd-year BTech IT student at AKTU — open for collaboration, internships, and
              software development opportunities. Based in {PROFILE.location}.
            </p>
          </div>
        </div>

        <div className="contact__grid">
          {PLATFORMS.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`contact__card${item.primary ? ' contact__card--primary' : ''}`}
              onClick={() => copyHandle(item.value)}
              title={`Copy ${item.label} handle`}
            >
              <span className="contact__label">{item.label}</span>
              <span className="contact__value mono">{item.value}</span>
              <span className="contact__desc">{item.desc}</span>
              <span className="contact__copy">Click to copy</span>
            </button>
          ))}
        </div>

        <p className="contact__note">
          All stats &amp; achievements are shown on this portfolio — scroll to{' '}
          <button type="button" className="contact__inline-link" onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}>
            Stats
          </button>{' '}
          or{' '}
          <button type="button" className="contact__inline-link" onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}>
            Achievements
          </button>
        </p>
      </div>
    </section>
  )
}
