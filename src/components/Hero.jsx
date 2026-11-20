import { PROFILE, HERO_IMAGE } from '../data/profile'
import { LINKS } from '../data/links'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Left Column: Grid Paper & Text */}
      <div className="hero__text grid-paper">
        <span className="eyebrow">
          Hey, I&apos;m Piyush 👋
        </span>

        <h1 className="hero__title">
          Student <span className="hero__amp">&amp;</span>
          <br />
          <span className="hero__accent">Software</span>
          <br />
          Developer
        </h1>

        <p className="lead">
          3rd-year BTech IT student at AKTU · <strong>AWS Campus Ambassador</strong>. I build reliable software in the open, strong in DSA, and shipping hands-on open-source &amp; cloud projects.
        </p>

        <div className="hero__actions">
          <a
            href="#projects"
            className="btn btn--sunbeam"
            onClick={(e) => { e.preventDefault(); scrollTo('projects') }}
          >
            See my work <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>
          </a>
          <a
            href="#contact"
            className="btn"
            onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
          >
            Let&apos;s connect <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>

        <div className="hero__social">
          <p className="label muted">Find me on</p>
          <div className="hero__icons">
            <a
              href={LINKS.github}
              className="btn btn--sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </a>
            <a
              href={LINKS.linkedin}
              className="btn btn--sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35v-11.5h3.41v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.32ZM5.34 7.38a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56v-11.5h3.56v11.5Z"/></svg>
              LinkedIn (5K+)
            </a>
            <a
              href={LINKS.leetcode}
              className="btn btn--sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ color: '#f59e0b', fontWeight: 900 }}>LC</span>
              LeetCode
            </a>
            <a
              href={LINKS.codeforces}
              className="btn btn--sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ color: '#3b82f6', fontWeight: 900 }}>CF</span>
              Codeforces
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Violet Grid Paper & Photo / Code Card */}
      <div className="hero__visual grid-paper--violet">
        <div className="hero__frame">
          <div className="hero__photo">
            <img
              src={HERO_IMAGE}
              alt="Piyush Kushwaha sitting at AWS booth as Campus Ambassador"
              loading="eager"
            />
          </div>
          <span className="hero__badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            AWS Ambassador · AKTU &apos;28
          </span>
        </div>

        <pre className="code-card" aria-label="Profile as code">
<code><span className="c-k">const</span> <span className="c-v">piyush</span> = &#123;
  role: <span className="c-s">&apos;Software Developer&apos;</span>,
  focus: [<span className="c-s">&apos;open source&apos;</span>, <span className="c-s">&apos;cloud &amp; AWS&apos;</span>, <span className="c-s">&apos;DSA&apos;</span>],
  stack: [<span className="c-s">&apos;React&apos;</span>, <span className="c-s">&apos;C++&apos;</span>, <span className="c-s">&apos;JavaScript&apos;</span>, <span className="c-s">&apos;AWS&apos;</span>],
  shipping: <span className="c-b">true</span>,
&#125;;<span className="caret"></span></code></pre>
      </div>
    </section>
  )
}
