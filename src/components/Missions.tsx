import { Card, CardContent } from '@/components/ui/card'
import { Target, Heart, GraduationCap, Users, Lightbulb, HandHeart } from '@phosphor-icons/react'

export default function Missions() {
  const missions = [
    {
      icon: GraduationCap,
      title: 'Éducation de Qualité',
      description: 'Offrir une éducation de qualité accessible à tous les enfants, en particulier dans les zones rurales et défavorisées. Nous croyons que chaque enfant mérite les mêmes opportunités d\'apprentissage.'
    },
    {
      icon: Heart,
      title: 'Santé Maternelle et Infantile',
      description: 'Améliorer la santé des mères et des enfants par des programmes de sensibilisation, des formations et un accès facilité aux soins de santé primaires et préventifs.'
    },
    {
      icon: Target,
      title: 'Développement Durable',
      description: 'Promouvoir l\'éducation pour le développement durable en intégrant les principes environnementaux, sociaux et économiques dans nos programmes éducatifs.'
    },
    {
      icon: Users,
      title: 'Autonomie des Élèves',
      description: 'Favoriser l\'autonomie et l\'émancipation des élèves en développant leurs compétences critiques, leur créativité et leur capacité à devenir des acteurs du changement dans leurs communautés.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Pédagogique',
      description: 'Développer et mettre en œuvre des méthodes pédagogiques innovantes adaptées aux contextes locaux, en utilisant des approches participatives et centrées sur l\'apprenant.'
    },
    {
      icon: HandHeart,
      title: 'Coopération et Partenariats',
      description: 'Établir des partenariats solides avec d\'autres ONG, institutions éducatives et communautés locales pour maximiser notre impact et partager les meilleures pratiques.'
    }
  ]

  return (
    <section id="missions" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop&q=80" 
          alt="Enfants africains en train d'apprendre, représentant nos missions éducatives"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-muted/60 to-background/80" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nos Missions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Xalima s'engage à transformer l'éducation et à améliorer les conditions de vie des communautés. 
            Nos missions reflètent notre vision d'un monde où chaque individu a accès aux opportunités 
            nécessaires pour s'épanouir et contribuer positivement à la société.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((mission, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <mission.icon className="w-8 h-8 text-primary" weight="duotone" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
                Notre Approche
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Sensibilisation locale et internationale :</strong> Nous organisons 
                  des campagnes de sensibilisation auprès des communautés locales et sur la scène internationale pour 
                  promouvoir l'importance de l'éducation et de la santé.
                </p>
                <p>
                  <strong className="text-foreground">Participation aux débats éducatifs :</strong> Xalima prend position 
                  dans les débats concernant les politiques éducatives, en plaidant pour des réformes qui favorisent 
                  l'équité et la qualité de l'enseignement.
                </p>
                <p>
                  <strong className="text-foreground">Coopération active :</strong> Nous collaborons étroitement avec 
                  d'autres organisations non gouvernementales, institutions publiques et acteurs du développement pour 
                  créer des synergies et amplifier notre impact.
                </p>
                <p>
                  <strong className="text-foreground">Transparence et redevabilité :</strong> Nous nous engageons à 
                  maintenir la transparence dans toutes nos actions et à rendre compte régulièrement de nos résultats 
                  à nos donateurs, partenaires et bénéficiaires.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">
            "Ensemble, nous construisons un avenir où l'éducation et la santé sont des droits accessibles à tous."
          </p>
        </div>
      </div>
    </section>
  )
}
