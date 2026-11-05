import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useProfileData } from './hooks/useProfileData'
import { PROFILE } from './data/profile'
import './index.css'

function App() {
  const { github, repos, leetcode, codeforces, loading } = useProfileData()

  return (
    <div className="app">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb--1" />
        <div className="bg-orb bg-orb--2" />
        <div className="bg-orb bg-orb--3" />
      </div>
      <Navbar />
      <main>
        <Hero github={github} leetcode={leetcode} loading={loading} />
        <Marquee items={PROFILE.skills} />
        <About github={github} leetcode={leetcode} />
        <Experience />
        <Achievements />
        <Stats
          github={github}
          leetcode={leetcode}
          codeforces={codeforces}
          loading={loading}
        />
        <Projects repos={repos} loading={loading} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
