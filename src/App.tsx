import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Formats } from './components/Formats'
import { LiveClips } from './components/LiveClips'
import { Moments } from './components/Moments'
import { Experiences } from './components/Experiences'
import { CaseStudies } from './components/CaseStudies'
import { Artists } from './components/Artists'
import { WhyJazzmarried } from './components/WhyJazzmarried'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Moments />
        <Experiences />
        <CaseStudies />
        <Formats />
        <LiveClips />
        <About />
        <Artists />
        <WhyJazzmarried />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
