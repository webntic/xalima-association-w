import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, Circle, Image as ImageIcon, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

interface Project {
  id: string
  title: string
  description: string
  status: 'ongoing' | 'completed'
  progress?: number
  funds?: string
  goal?: string
  impact?: string
  year?: string
  images?: string[]
  createdAt: string
}

function ProjectImage({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = project.images || []

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (images.length === 0) {
    return (
      <div className="h-48 bg-gradient-to-br from-primary to-primary/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>
    )
  }

  return (
    <div className="h-48 relative overflow-hidden group">
      <img
        src={images[currentImageIndex]}
        alt={`${project.title} - Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      
      {images.length > 1 && (
        <>
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <ImageIcon className="w-3 h-3" weight="fill" />
            {currentImageIndex + 1} / {images.length}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
            onClick={prevImage}
          >
            <CaretLeft className="w-5 h-5" weight="bold" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
            onClick={nextImage}
          >
            <CaretRight className="w-5 h-5" weight="bold" />
          </Button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  setCurrentImageIndex(index)
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Voir l'image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ongoing')
  const [adminProjects] = useKV<Project[]>('admin-projects', [])

  const ongoingProjects = adminProjects?.filter(p => p.status === 'ongoing') || []
  const completedProjects = adminProjects?.filter(p => p.status === 'completed') || []

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
              En Cours ({ongoingProjects.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="gap-2">
              <CheckCircle weight="fill" className="w-4 h-4" />
              Réalisés ({completedProjects.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing" className="space-y-8">
            {ongoingProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ongoingProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <ProjectImage project={project} />
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
                      {project.progress !== undefined && (
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
                          {project.funds && project.goal && (
                            <div className="flex items-center justify-between text-sm pt-2">
                              <span className="text-muted-foreground">Collecté: <strong>{project.funds}</strong></span>
                              <span className="text-muted-foreground">Objectif: <strong>{project.goal}</strong></span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <p>Aucun projet en cours pour le moment</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed" className="space-y-8">
            {completedProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {completedProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative">
                      <ProjectImage project={project} />
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <CheckCircle weight="fill" className="w-4 h-4" />
                        Terminé
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        {project.year && (
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded">
                              {project.year}
                            </span>
                          </div>
                        )}
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                      {project.impact && (
                        <div className="pt-4 border-t">
                          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                            <p className="text-sm font-semibold text-green-700 flex items-center gap-2">
                              <CheckCircle weight="fill" className="w-5 h-5" />
                              {project.impact}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <p>Aucun projet terminé pour le moment</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
