import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { House, Users, Rocket, HandHeart, EnvelopeSimple, CurrencyDollar, List, Gauge, Target } from '@phosphor-icons/react'
import XalimaLogo from './XalimaLogo'
import { useSiteSettings } from '@/hooks/use-site-settings'
import { motion } from 'framer-motion'

interface HeaderProps {
  onNavigate: (section: string) => void
  currentSection: string
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOwner, setIsOwner] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const settings = useSiteSettings()

  useEffect(() => {
    const checkOwnership = async () => {
      try {
        const user = await window.spark.user()
        setIsOwner(user?.isOwner || false)
      } catch {
        setIsOwner(false)
      }
    }

    checkOwnership()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sections = ['home', 'missions', 'about', 'projects', 'volunteer', 'contact', 'donate']
    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  const leftNavItems = [
    { id: 'home', label: 'Accueil', icon: House },
    { id: 'missions', label: 'Nos Missions', icon: Target },
    { id: 'about', label: 'À Propos', icon: Users },
    { id: 'projects', label: 'Nos Projets', icon: Rocket },
  ]

  const rightNavItems = [
    { id: 'volunteer', label: 'Devenir Volontaire', icon: HandHeart },
    { id: 'contact', label: 'Contact', icon: EnvelopeSimple },
  ]

  const allNavItems = [...leftNavItems, ...rightNavItems]

  const handleNavigate = (section: string) => {
    setActiveSection(section)
    onNavigate(section)
    setIsOpen(false)
  }

  const handleLoginClick = () => {
    navigate('/admin/login')
    setIsOpen(false)
  }

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-card/98 backdrop-blur-md shadow-lg border-b border-border/50' 
          : 'bg-card/95 backdrop-blur border-b border-border/30'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between gap-6" style={{ height: `${settings.headerHeight}px` }}>
          <nav className="hidden lg:flex items-center gap-1">
            {leftNavItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <motion.div key={item.id} className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => handleNavigate(item.id)}
                    className={`gap-2 px-4 py-2 font-medium transition-all duration-200 ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    <item.icon weight={isActive ? 'fill' : 'regular'} className="transition-all" />
                    <span className="text-sm">{item.label}</span>
                  </Button>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              )
            })}
          </nav>

          <div className="flex-shrink-0">
            <motion.button
              onClick={() => handleNavigate('home')}
              className="flex items-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <XalimaLogo size="md" />
            </motion.button>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {rightNavItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <motion.div key={item.id} className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => handleNavigate(item.id)}
                    className={`gap-2 px-4 py-2 font-medium transition-all duration-200 ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    <item.icon weight={isActive ? 'fill' : 'regular'} className="transition-all" />
                    <span className="text-sm">{item.label}</span>
                  </Button>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-[1.35rem] left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              )
            })}
            
            <div className="h-6 w-px bg-border/50 mx-2" />
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => handleNavigate('donate')}
                className="gap-2 px-5 py-2 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground font-semibold shadow-md hover:shadow-lg transition-all duration-200"
              >
                <CurrencyDollar weight="fill" className="h-5 w-5" />
                Faire un don
              </Button>
            </motion.div>

            {isOwner && (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  onClick={handleLoginClick}
                  className="gap-2 px-4 py-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                >
                  <Gauge className="h-4 w-4" />
                  <span className="text-sm">Connexion</span>
                </Button>
              </motion.div>
            )}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="border-border/50">
                <List className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card/98 backdrop-blur-xl">
              <div className="flex flex-col gap-2 mt-8">
                <div className="flex items-center justify-center pb-6 border-b border-border/30">
                  <XalimaLogo size="sm" />
                </div>
                
                <div className="py-2">
                  {allNavItems.map((item) => {
                    const isActive = activeSection === item.id
                    return (
                      <Button
                        key={item.id}
                        variant="ghost"
                        onClick={() => handleNavigate(item.id)}
                        className={`w-full justify-start gap-3 h-12 mb-1 ${
                          isActive 
                            ? 'bg-primary/10 text-primary font-semibold' 
                            : 'text-foreground/70'
                        }`}
                      >
                        <item.icon weight={isActive ? 'fill' : 'regular'} className="h-5 w-5" />
                        {item.label}
                      </Button>
                    )
                  })}
                </div>

                <div className="pt-4 border-t border-border/30 space-y-2">
                  <Button
                    onClick={() => handleNavigate('donate')}
                    className="w-full gap-3 h-12 bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 font-semibold shadow-md"
                  >
                    <CurrencyDollar weight="fill" className="h-5 w-5" />
                    Faire un don
                  </Button>
                  
                  {isOwner && (
                    <Button
                      variant="outline"
                      onClick={handleLoginClick}
                      className="w-full justify-start gap-3 h-12 border-primary/20"
                    >
                      <Gauge className="h-5 w-5" />
                      Connexion
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
