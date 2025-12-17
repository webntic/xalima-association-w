import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { House, Users, Rocket, HandHeart, EnvelopeSimple, CurrencyDollar, List, Gauge, Target } from '@phosphor-icons/react'
import XalimaLogo from './XalimaLogo'
import { useSiteSettings } from '@/hooks/use-site-settings'

interface HeaderProps {
  onNavigate: (section: string) => void
  currentSection: string
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOwner, setIsOwner] = useState(false)
  const navigate = useNavigate()
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
    onNavigate(section)
    setIsOpen(false)
  }

  const handleLoginClick = () => {
    navigate('/admin/login')
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between gap-4" style={{ height: `${settings.headerHeight}px` }}>
          <nav className="hidden md:flex items-center gap-2">
            {leftNavItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavigate(item.id)}
                className="gap-2"
              >
                <item.icon />
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigate('home')}
              className="flex items-center group transition-transform hover:scale-105"
            >
              <XalimaLogo size="md" />
            </button>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {rightNavItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavigate(item.id)}
                className="gap-2"
              >
                <item.icon />
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => handleNavigate('donate')}
              className="ml-4 gap-2 bg-accent hover:bg-accent/90"
            >
              <CurrencyDollar weight="fill" />
              Faire un don
            </Button>
            {isOwner && (
              <Button
                variant="outline"
                onClick={handleLoginClick}
                className="gap-2"
              >
                <Gauge />
                Connexion
              </Button>
            )}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <List className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px]">
              <div className="flex flex-col gap-4 mt-8">
                <div className="flex items-center gap-3 pb-4 border-b">
                  <XalimaLogo size="sm" />
                </div>
                {allNavItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => handleNavigate(item.id)}
                    className="justify-start gap-3 h-12"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Button>
                ))}
                <Button
                  onClick={() => handleNavigate('donate')}
                  className="gap-3 h-12 bg-accent hover:bg-accent/90 mt-4"
                >
                  <CurrencyDollar weight="fill" />
                  Faire un don
                </Button>
                {isOwner && (
                  <Button
                    variant="outline"
                    onClick={handleLoginClick}
                    className="justify-start gap-3 h-12"
                  >
                    <Gauge className="h-5 w-5" />
                    Connexion
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
