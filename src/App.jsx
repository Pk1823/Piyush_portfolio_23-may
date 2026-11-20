import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import BentoHighlights from './components/BentoHighlights'
import Projects from './components/Projects'
import About from './components/About'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useProfileData } from './hooks/useProfileData'
import './index.css'

function App() {
  const { github, repos, leetcode, codeforces, loading } = useProfileData()

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BentoHighlights />
        <Projects repos={repos} loading={loading} />
        <About />
        <Experience />
        <Achievements />
        <Stats
          github={github}
          leetcode={leetcode}
          codeforces={codeforces}
          loading={loading}
        />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
