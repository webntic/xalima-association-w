import { FacebookLogo, InstagramLogo, YoutubeLogo, TiktokLogo, Heart, MapPin, Phone, EnvelopeSimple, ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useSiteSettings } from '@/hooks/use-site-settings'
import XalimaLogo from './XalimaLogo'
import { Button } from '@/components/ui/button'

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
    <footer className="relative bg-gradient-to-br from-foreground via-foreground to-primary text-background overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)`
        }}></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          <div className={`lg:col-span-4 flex flex-col ${getLogoAlignClass()}`}>
            <div className="mb-6">
              <XalimaLogo size="sm" />
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-sm">
              {settings.description}
            </p>
            <Button 
              onClick={() => onNavigate('donate')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit group"
            >
              Faire un Don
              <Heart weight="fill" className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-background/80 hover:text-background hover:translate-x-1 transition-all flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" weight="fill" />
                <span className="leading-relaxed">{settings.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-secondary" weight="fill" />
                <span>{settings.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimple className="w-5 h-5 flex-shrink-0 text-accent" weight="fill" />
                <span>{settings.email}</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Suivez-nous
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-background/10 backdrop-blur-sm hover:bg-accent hover:scale-110 flex items-center justify-center transition-all duration-300 border border-background/20 hover:border-accent"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" weight="fill" />
                </a>
              ))}
            </div>
            <p className="text-sm text-background/70 mt-6 leading-relaxed">
              Rejoignez notre communauté et suivez l'impact de nos actions
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm">
              <Link 
                to="/mentions-legales" 
                className="text-background/70 hover:text-background transition-colors"
              >
                Mentions Légales
              </Link>
              <span className="text-background/30">•</span>
              <Link 
                to="/politique-de-confidentialite" 
                className="text-background/70 hover:text-background transition-colors"
              >
                Politique de Confidentialité
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-background/70">
              <span>© {new Date().getFullYear()} {settings.siteName}</span>
              <span className="text-background/30">•</span>
              <span className="flex items-center gap-1.5">
                Fait avec
                <Heart weight="fill" className="w-4 h-4 text-accent animate-pulse" />
                pour l'éducation
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
