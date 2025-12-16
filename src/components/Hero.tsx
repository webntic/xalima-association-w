import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Rocket, HandHeart, CurrencyDollar, Users } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroProps {
  onNavigate: (section: string) => void
}

const carouselImages = [
  {
    gradient: 'from-primary/90 via-primary/70 to-primary/50',
    title: 'Éducation de qualité',
    description: 'Offrir une éducation accessible à tous les enfants',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1600&h=900&fit=crop&q=80'
  },
  {
    gradient: 'from-secondary/90 via-secondary/70 to-secondary/50',
    title: 'Santé maternelle',
    description: 'Accompagner les mères et enfants pour un avenir meilleur',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&h=900&fit=crop&q=80'
  },
  {
    gradient: 'from-accent/90 via-accent/70 to-accent/50',
    title: 'Impact local',
    description: 'Transformer les communautés par l\'autonomisation',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&h=900&fit=crop&q=80'
  }
]

export default function Hero({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const quickLinks = [
    {
      id: 'about',
      title: 'À Propos',
      description: 'Découvrez notre mission',
      icon: Users,
      color: 'bg-secondary'
    },
    {
      id: 'projects',
      title: 'Nos Projets',
      description: 'Explorez nos réalisations',
      icon: Rocket,
      color: 'bg-primary'
    },
    {
      id: 'donate',
      title: 'Faire un don',
      description: 'Soutenez notre cause',
      icon: CurrencyDollar,
      color: 'bg-accent'
    },
    {
      id: 'volunteer',
      title: 'Devenir Volontaire',
      description: 'Rejoignez notre équipe',
      icon: HandHeart,
      color: 'bg-primary'
    }
  ]

  return (
    <div className="w-full">
      <div className="relative h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img 
              src={carouselImages[currentSlide].image}
              alt={carouselImages[currentSlide].title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${carouselImages[currentSlide].gradient}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.05)_50%,transparent_52%)] bg-[length:20px_20px]" />
          </motion.div>
        </AnimatePresence>

        <div className="relative h-full container mx-auto px-6 lg:px-12 flex flex-col justify-center items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              L'éducation pour tous
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-8 font-serif">
              {carouselImages[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => onNavigate('donate')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-lg px-8 h-14 transition-transform hover:scale-105"
              >
                Faire un don
                <ArrowRight weight="bold" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('about')}
                className="bg-white/20 hover:bg-white/30 text-white border-white/40 backdrop-blur-sm gap-2 text-lg px-8 h-14 transition-transform hover:scale-105"
              >
                En savoir plus
                <ArrowRight weight="bold" />
              </Button>
            </div>
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bienvenue chez Xalima</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une association dédiée à l'éducation de qualité, la santé maternelle et infantile, 
            et le développement durable des communautés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link) => (
            <Card
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="p-6 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 rounded-xl ${link.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                <link.icon className="w-7 h-7 text-white" weight="fill" />
              </div>
              <h3 className="text-xl font-bold mb-2">{link.title}</h3>
              <p className="text-muted-foreground text-sm">{link.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
