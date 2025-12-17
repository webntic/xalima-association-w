import { Card } from '@/components/ui/card'
import { Target, Heart, Megaphone, Handshake } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

export default function About() {
  const objectives = [
    {
      icon: Heart,
      title: 'Santé maternelle et infantile',
      description: 'Améliorer la santé et le bien-être des mères et des enfants dans nos communautés.',
      gradient: 'from-pink-500/20 to-pink-500/5',
      iconBg: 'bg-gradient-to-br from-pink-500 to-pink-600',
      delay: 0.1
    },
    {
      icon: Target,
      title: 'Qualité des soins',
      description: 'Garantir un accès équitable à des soins de santé et une éducation de qualité.',
      gradient: 'from-secondary/20 to-secondary/5',
      iconBg: 'bg-gradient-to-br from-secondary to-secondary/80',
      delay: 0.2
    },
    {
      icon: Target,
      title: 'Développement durable',
      description: 'Promouvoir une éducation qui favorise le développement durable et l\'autonomie.',
      gradient: 'from-green-500/20 to-green-500/5',
      iconBg: 'bg-gradient-to-br from-green-500 to-green-600',
      delay: 0.3
    }
  ]

  const actions = [
    {
      icon: Megaphone,
      title: 'Sensibilisation',
      description: 'Campagnes de sensibilisation locale et internationale sur l\'importance de l\'éducation.',
      gradient: 'from-accent/20 to-accent/5',
      iconBg: 'bg-gradient-to-br from-accent to-accent/80',
      delay: 0.1
    },
    {
      icon: Target,
      title: 'Positionnement',
      description: 'Participation active aux débats sur les politiques éducatives et sanitaires.',
      gradient: 'from-primary/20 to-primary/5',
      iconBg: 'bg-gradient-to-br from-primary to-primary/80',
      delay: 0.2
    },
    {
      icon: Handshake,
      title: 'Coopération',
      description: 'Collaboration avec d\'autres ONG pour maximiser notre impact collectif.',
      gradient: 'from-secondary/20 to-secondary/5',
      iconBg: 'bg-gradient-to-br from-secondary to-secondary/80',
      delay: 0.3
    }
  ]

  return (
    <div className="py-24 lg:py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(224,30,99,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(3,169,244,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            À Propos de Xalima
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground font-serif leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Offrir une éducation de qualité et favoriser l'autonomie des élèves
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <motion.div 
              className="bg-gradient-to-br from-primary/10 to-primary/5 border-l-4 border-primary p-8 rounded-r-2xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ x: 5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">Notre Mission</h3>
              <p className="text-foreground leading-relaxed">
                Xalima s'engage à transformer des vies à travers l'éducation. Nous croyons que chaque 
                enfant mérite une éducation de qualité et que chaque mère mérite un accès aux soins 
                appropriés. Notre mission est de créer un avenir meilleur en investissant dans 
                l'éducation et la santé.
              </p>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-l-4 border-secondary p-8 rounded-r-2xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ x: 5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-secondary">Notre Vision</h3>
              <p className="text-foreground leading-relaxed">
                Nous aspirons à un monde où l'éducation est accessible à tous, où les communautés 
                sont autonomes et résilientes, et où chaque personne a l'opportunité de réaliser 
                son plein potentiel.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 rounded-3xl blur-xl" />
            <div className="relative bg-card/95 backdrop-blur-sm border-2 border-border/50 rounded-3xl p-8 space-y-4 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-2xl font-bold text-primary-foreground">X</span>
                </motion.div>
                <div>
                  <h4 className="font-bold text-lg">Xalima</h4>
                  <p className="text-sm text-muted-foreground">Depuis notre création</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Projets réalisés', value: '15+', color: 'primary' },
                  { label: 'Bénéficiaires', value: '1000+', color: 'secondary' },
                  { label: 'Volontaires actifs', value: '50+', color: 'accent' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-muted to-muted/50 rounded-xl hover:shadow-md transition-all"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <span className="text-sm font-semibold">{stat.label}</span>
                    <span className={`text-3xl font-bold text-${stat.color}`}>{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mb-20">
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nos Objectifs
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: objective.delay }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Card className={`p-8 h-full hover:shadow-2xl transition-all bg-gradient-to-br ${objective.gradient} border-2 border-transparent hover:border-primary/20 relative overflow-hidden group`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl ${objective.iconBg} flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <objective.icon className="w-8 h-8 text-white" weight="fill" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-3">{objective.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nos Actions
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: action.delay }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Card className={`p-8 h-full hover:shadow-2xl transition-all bg-gradient-to-br ${action.gradient} border-2 border-transparent hover:border-secondary/20 relative overflow-hidden group`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl ${action.iconBg} flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <action.icon className="w-8 h-8 text-white" weight="fill" />
                    </motion.div>
                    <h4 className="text-xl font-bold mb-3">{action.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{action.description}</p>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
