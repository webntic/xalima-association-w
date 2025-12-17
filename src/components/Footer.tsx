import { FacebookLogo, InstagramLogo, YoutubeLogo, TiktokLogo, Heart, MapPin, Phone, EnvelopeSimple, ArrowRight } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useSiteSettings } from '@/hooks/use-site-settings'
import XalimaLogo from './XalimaLogo'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

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
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)`
        }}></div>
      </motion.div>

      <div className="relative container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          <motion.div 
            className={`lg:col-span-4 flex flex-col ${getLogoAlignClass()}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <XalimaLogo size="sm" />
            </motion.div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-sm">
              {settings.description}
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => onNavigate('donate')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit group shadow-lg hover:shadow-xl transition-shadow"
              >
                Faire un Don
                <Heart weight="fill" className="ml-2 w-4 h-4 group-hover:scale-125 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Navigation
              <motion.span 
                className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <motion.button
                    onClick={() => onNavigate(link.id)}
                    className="text-background/80 hover:text-background transition-all flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Contact
              <motion.span 
                className="absolute -bottom-2 left-0 w-12 h-1 bg-secondary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </h3>
            <ul className="space-y-4 text-background/80">
              {[
                { icon: MapPin, text: settings.address, color: 'text-accent' },
                { icon: Phone, text: settings.phone, color: 'text-secondary' },
                { icon: EnvelopeSimple, text: settings.email, color: 'text-accent' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <item.icon className={`w-5 h-5 ${index === 0 ? 'mt-0.5' : ''} flex-shrink-0 ${item.color}`} weight="fill" />
                  <span className="leading-relaxed">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-6 relative inline-block">
              Suivez-nous
              <motion.span 
                className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-background/10 backdrop-blur-sm hover:bg-accent flex items-center justify-center transition-all duration-300 border border-background/20 hover:border-accent"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" weight="fill" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-background/70 mt-6 leading-relaxed">
              Rejoignez notre communauté et suivez l'impact de nos actions
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-background/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm">
              <Link 
                to="/mentions-legales" 
                className="text-background/70 hover:text-background transition-colors hover:underline underline-offset-4"
              >
                Mentions Légales
              </Link>
              <span className="text-background/30">•</span>
              <Link 
                to="/politique-de-confidentialite" 
                className="text-background/70 hover:text-background transition-colors hover:underline underline-offset-4"
              >
                Politique de Confidentialité
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-background/70">
              <span>© {new Date().getFullYear()} {settings.siteName}</span>
              <span className="text-background/30">•</span>
              <span className="flex items-center gap-1.5">
                Fait avec
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart weight="fill" className="w-4 h-4 text-accent" />
                </motion.div>
                pour l'éducation
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
