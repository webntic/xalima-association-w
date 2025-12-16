import { Separator } from '@/components/ui/separator'
import { FacebookLogo, InstagramLogo, YoutubeLogo, TiktokLogo, Heart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

interface FooterProps {
  onNavigate: (section: string) => void
  onLegalNavigate?: (path: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'about', label: 'À Propos' },
    { id: 'projects', label: 'Nos Projets' },
    { id: 'volunteer', label: 'Devenir Volontaire' },
    { id: 'donate', label: 'Faire un Don' },
    { id: 'contact', label: 'Contact' }
  ]

  const socialMedia = [
    { name: 'Facebook', icon: FacebookLogo, url: '#' },
    { name: 'Instagram', icon: InstagramLogo, url: '#' },
    { name: 'YouTube', icon: YoutubeLogo, url: '#' },
    { name: 'TikTok', icon: TiktokLogo, url: '#' }
  ]

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">X</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xl font-bold">Xalima</span>
                <span className="text-xs text-muted-foreground italic">L'éducation pour tous</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Association dédiée à l'éducation de qualité, la santé maternelle et infantile, 
              et le développement durable des communautés.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Avenue de la République</li>
              <li>Dakar, Sénégal</li>
              <li className="pt-2">+221 33 XXX XX XX</li>
              <li>contact@xalima.org</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Réseaux Sociaux</h3>
            <div className="flex gap-3 mb-4">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" weight="fill" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Suivez nos actualités et projets
            </p>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link 
              to="/mentions-legales" 
              className="hover:text-primary transition-colors"
            >
              Mentions Légales
            </Link>
            <Link 
              to="/politique-de-confidentialite" 
              className="hover:text-primary transition-colors"
            >
              Politique de Confidentialité
            </Link>
          </div>
          
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Xalima. Fait avec</span>
            <Heart weight="fill" className="w-4 h-4 text-accent" />
            <span>pour l'éducation</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
