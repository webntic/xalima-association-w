import { useState } from 'react'
import { Toaster } from '@/components/ui/sonner'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Volunteer from './components/Volunteer'
import Donate from './components/Donate'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    setCurrentSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      <Header onNavigate={scrollToSection} currentSection={currentSection} />
      
      <main>
        <section id="home">
          <Hero onNavigate={scrollToSection} />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="volunteer">
          <Volunteer />
        </section>
        
        <section id="donate">
          <Donate />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer onNavigate={scrollToSection} />
      <Toaster />
    </div>
  )
}

export default App