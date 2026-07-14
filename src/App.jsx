import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Awards from './components/Awards'
import Practice from './components/Practice'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Awards />
        <Practice />
        <Gallery />
        <Contact />
      </main>
    </div>
  )
}

export default App
