import Hero from '@/components/Hero'
import Missions from '@/components/Missions'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Volunteer from '@/components/Volunteer'
import Donate from '@/components/Donate'
import Contact from '@/components/Contact'
import SEO from '@/components/SEO'
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
      <SEO
        title="Xalima - L'éducation pour tous | Association pour l'éducation et la santé en Afrique"
        description="Xalima est une association dédiée à l'éducation de qualité, la santé maternelle et infantile, et le développement durable des communautés en Afrique. Rejoignez-nous pour faire la différence."
        keywords="éducation Afrique, santé maternelle, ONG éducation, association humanitaire, développement durable Afrique, volontariat international, don ONG, Xalima"
        canonical="https://xalima.org"
      />
      <section id="home">
        <Hero onNavigate={handleNavigate} />
      </section>
      
      <section id="missions">
        <Missions />
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
