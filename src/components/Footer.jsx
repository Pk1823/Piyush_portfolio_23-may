import { LINKS } from '../data/links'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        Designed &amp; built by <strong>Piyush Kushwaha</strong> · {year}
      </p>
      <div className="footer__links">
        <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={LINKS.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
      </div>
    </footer>
  )
}
