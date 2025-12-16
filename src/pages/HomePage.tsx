import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Volunteer from '@/components/Volunteer'
import Donate from '@/components/Donate'
import Contact from '@/components/Contact'
import { useInitData } from '@/hooks/use-init-data'

export default function HomePage() {
  useInitData()

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section id="home">
        <Hero onNavigate={handleNavigate} />
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
    </>
  )
}
