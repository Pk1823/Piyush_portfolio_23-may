import { LINKS } from '../data/links'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__copy">
          &copy; {currentYear} Piyush Kushwaha. Built in the open with React &amp; Vite.
        </p>

        <div className="site-footer__links">
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn (5K+)</a>
          <a href={LINKS.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
          <a href={LINKS.codeforces} target="_blank" rel="noopener noreferrer">Codeforces</a>
        </div>
      </div>
    </footer>
  )
}
