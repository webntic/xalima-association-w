import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { House, Users, Rocket, HandHeart, EnvelopeSimple, CurrencyDollar, List, Gauge } from '@phosphor-icons/react'

interface HeaderProps {
  onNavigate: (section: string) => void
  currentSection: string
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOwner, setIsOwner] = useState(false)
  const navigate = useNavigate()

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

  const navItems = [
    { id: 'home', label: 'Accueil', icon: House },
    { id: 'about', label: 'À Propos', icon: Users },
    { id: 'projects', label: 'Nos Projets', icon: Rocket },
    { id: 'volunteer', label: 'Devenir Volontaire', icon: HandHeart },
    { id: 'contact', label: 'Contact', icon: EnvelopeSimple },
  ]

  const handleNavigate = (section: string) => {
    onNavigate(section)
    setIsOpen(false)
  }

  const handleAdminClick = () => {
    navigate('/admin')
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-2xl font-bold text-primary-foreground">X</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold text-foreground">Xalima</span>
              <span className="text-xs text-muted-foreground italic">L'éducation pour tous</span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
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
            {isOwner && (
              <Button
                variant="outline"
                onClick={handleAdminClick}
                className="gap-2"
              >
                <Gauge />
                Admin
              </Button>
            )}
            <Button
              onClick={() => handleNavigate('donate')}
              className="ml-4 gap-2 bg-accent hover:bg-accent/90"
            >
              <CurrencyDollar weight="fill" />
              Faire un don
            </Button>
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
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">X</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-lg font-bold">Xalima</span>
                    <span className="text-xs text-muted-foreground italic">L'éducation pour tous</span>
                  </div>
                </div>
                {navItems.map((item) => (
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
                {isOwner && (
                  <Button
                    variant="outline"
                    onClick={handleAdminClick}
                    className="justify-start gap-3 h-12"
                  >
                    <Gauge className="h-5 w-5" />
                    Admin
                  </Button>
                )}
                <Button
                  onClick={() => handleNavigate('donate')}
                  className="gap-3 h-12 bg-accent hover:bg-accent/90 mt-4"
                >
                  <CurrencyDollar weight="fill" />
                  Faire un don
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
