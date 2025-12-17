import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Rocket, HandHeart, CurrencyDollar, Users, Sparkle } from '@phosphor-icons/react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

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
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

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
      gradient: 'from-secondary/20 to-secondary/5',
      iconBg: 'bg-gradient-to-br from-secondary to-secondary/80',
      delay: 0.1
    },
    {
      id: 'projects',
      title: 'Nos Projets',
      description: 'Explorez nos réalisations',
      icon: Rocket,
      gradient: 'from-primary/20 to-primary/5',
      iconBg: 'bg-gradient-to-br from-primary to-primary/80',
      delay: 0.2
    },
    {
      id: 'donate',
      title: 'Faire un don',
      description: 'Soutenez notre cause',
      icon: CurrencyDollar,
      gradient: 'from-accent/20 to-accent/5',
      iconBg: 'bg-gradient-to-br from-accent to-accent/80',
      delay: 0.3
    },
    {
      id: 'volunteer',
      title: 'Devenir Volontaire',
      description: 'Rejoignez notre équipe',
      icon: HandHeart,
      gradient: 'from-primary/20 to-primary/5',
      iconBg: 'bg-gradient-to-br from-primary to-primary/80',
      delay: 0.4
    }
  ]

  return (
    <div className="w-full">
      <motion.div className="relative h-[600px] lg:h-[700px] overflow-hidden" style={{ y }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0"
          >
            <motion.img 
              src={carouselImages[currentSlide].image}
              alt={carouselImages[currentSlide].title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.05 }}
              transition={{ duration: 7, ease: 'linear' }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${carouselImages[currentSlide].gradient}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
            <motion.div 
              className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.08)_50%,transparent_52%)] bg-[length:30px_30px]"
              animate={{ backgroundPosition: ['0px 0px', '30px 30px'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/30 rounded-full"
                  initial={{ 
                    x: Math.random() * window.innerWidth,
                    y: -20,
                    scale: 0
                  }}
                  animate={{
                    y: window.innerHeight + 20,
                    scale: [0, 1, 0],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    delay: i * 1.5,
                    ease: 'linear'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="relative h-full container mx-auto px-6 lg:px-12 flex flex-col justify-center items-start"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="max-w-3xl"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white/90 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Sparkle weight="fill" className="w-4 h-4" />
              Association Xalima
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              L'éducation pour tous
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/95 mb-10 font-serif leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {carouselImages[currentSlide].description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  onClick={() => onNavigate('donate')}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 text-lg px-10 h-16 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl font-semibold"
                >
                  Faire un don
                  <ArrowRight weight="bold" className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('about')}
                  className="bg-white/25 hover:bg-white/35 text-white border-2 border-white/50 backdrop-blur-md gap-2 text-lg px-10 h-16 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl font-semibold"
                >
                  En savoir plus
                  <ArrowRight weight="bold" className="w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {carouselImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-12' : 'bg-white/40 hover:bg-white/60 w-8'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bienvenue chez Xalima
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Une association dédiée à l'éducation de qualité, la santé maternelle et infantile, 
            et le développement durable des communautés.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: link.delay }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card
                  onClick={() => onNavigate(link.id)}
                  className={`p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl group relative overflow-hidden bg-gradient-to-br ${link.gradient} border-2 border-transparent hover:border-primary/20`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl ${link.iconBg} flex items-center justify-center mb-5 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <link.icon className="w-8 h-8 text-white" weight="fill" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                    {link.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{link.description}</p>
                  
                  <motion.div 
                    className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    Découvrir
                    <ArrowRight weight="bold" className="w-4 h-4" />
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
