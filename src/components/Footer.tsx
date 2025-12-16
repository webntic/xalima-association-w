import { Separator } from '@/components/ui/separator'
import { FacebookLogo, InstagramLogo, YoutubeLogo, TiktokLogo, Heart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useSiteSettings } from '@/hooks/use-site-settings'
import XalimaLogo from './XalimaLogo'

interface FooterProps {
  onNavigate: (section: string) => void
  onLegalNavigate?: (path: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const settings = useSiteSettings()
  
  const quickLinks = [
    { id: 'missions', label: 'Nos Missions' },
    { id: 'about', label: 'À Propos' },
    { id: 'projects', label: 'Nos Projets' },
    { id: 'volunteer', label: 'Devenir Volontaire' },
    { id: 'donate', label: 'Faire un Don' },
    { id: 'contact', label: 'Contact' }
  ]

  const socialMedia = [
    { name: 'Facebook', icon: FacebookLogo, url: settings.facebookUrl },
    { name: 'Instagram', icon: InstagramLogo, url: settings.instagramUrl },
    { name: 'YouTube', icon: YoutubeLogo, url: settings.youtubeUrl },
    { name: 'TikTok', icon: TiktokLogo, url: settings.tiktokUrl }
  ]

  const getLogoAlignClass = () => {
    switch (settings.footerLogoPosition) {
      case 'center':
        return 'items-center text-center'
      case 'right':
        return 'items-end text-right'
      default:
        return 'items-start text-left'
    }
  }

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className={`flex flex-col ${getLogoAlignClass()}`}>
            <div className="mb-4">
              <XalimaLogo size="sm" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {settings.description}
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
              <li>{settings.address}</li>
              <li className="pt-2">{settings.phone}</li>
              <li>{settings.email}</li>
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
            <span>© {new Date().getFullYear()} {settings.siteName}. Fait avec</span>
            <Heart weight="fill" className="w-4 h-4 text-accent" />
            <span>pour l'éducation</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
