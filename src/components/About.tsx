import { Card } from '@/components/ui/card'
import { Target, Heart, Megaphone, Handshake } from '@phosphor-icons/react'

export default function About() {
  const objectives = [
    {
      icon: Heart,
      title: 'Santé maternelle et infantile',
      description: 'Améliorer la santé et le bien-être des mères et des enfants dans nos communautés.'
    },
    {
      icon: Target,
      title: 'Qualité des soins',
      description: 'Garantir un accès équitable à des soins de santé et une éducation de qualité.'
    },
    {
      icon: Target,
      title: 'Développement durable',
      description: 'Promouvoir une éducation qui favorise le développement durable et l\'autonomie.'
    }
  ]

  const actions = [
    {
      icon: Megaphone,
      title: 'Sensibilisation',
      description: 'Campagnes de sensibilisation locale et internationale sur l\'importance de l\'éducation.'
    },
    {
      icon: Target,
      title: 'Positionnement',
      description: 'Participation active aux débats sur les politiques éducatives et sanitaires.'
    },
    {
      icon: Handshake,
      title: 'Coopération',
      description: 'Collaboration avec d\'autres ONG pour maximiser notre impact collectif.'
    }
  ]

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">À Propos de Xalima</h2>
          <p className="text-xl text-muted-foreground font-serif leading-relaxed">
            Offrir une éducation de qualité et favoriser l'autonomie des élèves
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold mb-3 text-primary">Notre Mission</h3>
              <p className="text-foreground leading-relaxed">
                Xalima s'engage à transformer des vies à travers l'éducation. Nous croyons que chaque 
                enfant mérite une éducation de qualité et que chaque mère mérite un accès aux soins 
                appropriés. Notre mission est de créer un avenir meilleur en investissant dans 
                l'éducation et la santé.
              </p>
            </div>
            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold mb-3 text-secondary">Notre Vision</h3>
              <p className="text-foreground leading-relaxed">
                Nous aspirons à un monde où l'éducation est accessible à tous, où les communautés 
                sont autonomes et résilientes, et où chaque personne a l'opportunité de réaliser 
                son plein potentiel.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl" />
            <div className="relative bg-card border-2 border-border rounded-2xl p-8 space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">X</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Xalima</h4>
                  <p className="text-sm text-muted-foreground">Depuis notre création</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm font-semibold">Projets réalisés</span>
                  <span className="text-2xl font-bold text-primary">15+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm font-semibold">Bénéficiaires</span>
                  <span className="text-2xl font-bold text-secondary">1000+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm font-semibold">Volontaires actifs</span>
                  <span className="text-2xl font-bold text-accent">50+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Nos Objectifs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <objective.icon className="w-8 h-8 text-primary" weight="fill" />
                </div>
                <h4 className="text-xl font-bold mb-3">{objective.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Nos Actions</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {actions.map((action, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <action.icon className="w-8 h-8 text-secondary" weight="fill" />
                </div>
                <h4 className="text-xl font-bold mb-3">{action.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{action.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
