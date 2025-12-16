import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, Circle } from '@phosphor-icons/react'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ongoing')

  const completedProjects = [
    {
      title: 'Rénovation de l\'École Primaire de Dakar',
      description: 'Réhabilitation complète de 6 salles de classe, installation de nouvelles toilettes et création d\'une bibliothèque moderne.',
      impact: '350 élèves bénéficiaires',
      year: '2023',
      image: 'from-primary to-primary/60'
    },
    {
      title: 'Formation des Enseignants',
      description: 'Programme de formation pédagogique pour 45 enseignants sur les méthodes d\'enseignement modernes et inclusives.',
      impact: '45 enseignants formés',
      year: '2023',
      image: 'from-secondary to-secondary/60'
    },
    {
      title: 'Santé Maternelle - Clinique Mobile',
      description: 'Déploiement d\'une clinique mobile offrant des soins prénataux et postnataux dans 12 villages ruraux.',
      impact: '500+ mères et enfants soignés',
      year: '2022',
      image: 'from-accent to-accent/60'
    }
  ]

  const ongoingProjects = [
    {
      title: 'Construction de Bibliothèque Communautaire',
      description: 'Création d\'un espace d\'apprentissage moderne avec accès à 2000+ livres et ressources numériques pour la communauté.',
      progress: 75,
      funds: '75,000 €',
      goal: '100,000 €',
      image: 'from-primary to-primary/60'
    },
    {
      title: 'Programme de Bourses d\'Études',
      description: 'Financement de bourses scolaires pour 50 jeunes filles issues de familles défavorisées pour l\'année académique 2024-2025.',
      progress: 60,
      funds: '18,000 €',
      goal: '30,000 €',
      image: 'from-secondary to-secondary/60'
    },
    {
      title: 'Installation de Panneaux Solaires',
      description: 'Équipement de 3 écoles avec des systèmes solaires pour garantir un accès continu à l\'électricité et à l\'apprentissage numérique.',
      progress: 40,
      funds: '20,000 €',
      goal: '50,000 €',
      image: 'from-accent to-accent/60'
    }
  ]

  return (
    <div className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Nos Projets</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos réalisations et nos initiatives en cours pour transformer des vies
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="ongoing" className="gap-2">
              <Circle weight="fill" className="w-4 h-4" />
              En Cours
            </TabsTrigger>
            <TabsTrigger value="completed" className="gap-2">
              <CheckCircle weight="fill" className="w-4 h-4" />
              Réalisés
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`h-48 bg-gradient-to-br ${project.image} relative`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold flex-1">{project.title}</h3>
                      <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                        <Circle weight="fill" className="w-3 h-3 text-primary animate-pulse" />
                        <span className="text-xs font-semibold text-primary">En cours</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold">Progression</span>
                        <span className="text-2xl font-bold" style={{ color: 'oklch(0.85 0.15 85)' }}>
                          {project.progress}%
                        </span>
                      </div>
                      <Progress value={project.progress} className="h-2" style={{ 
                        backgroundColor: 'oklch(0.90 0.05 85)',
                      }} />
                      <div className="flex items-center justify-between text-sm pt-2">
                        <span className="text-muted-foreground">Collecté: <strong>{project.funds}</strong></span>
                        <span className="text-muted-foreground">Objectif: <strong>{project.goal}</strong></span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`h-48 bg-gradient-to-br ${project.image} relative`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <CheckCircle weight="fill" className="w-4 h-4" />
                      Terminé
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="pt-4 border-t">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm font-semibold text-green-700 flex items-center gap-2">
                          <CheckCircle weight="fill" className="w-5 h-5" />
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
