import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, Circle, Image as ImageIcon, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

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
    <div className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 via-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(3,169,244,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(224,30,99,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div 
          className="text-center mb-16"
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
            Nos Projets
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Découvrez nos réalisations et nos initiatives en cours pour transformer des vies
          </motion.p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16 h-14 p-1.5 bg-muted/80 backdrop-blur-sm">
              <TabsTrigger 
                value="ongoing" 
                className="gap-2 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                <Circle weight="fill" className="w-4 h-4" />
                En Cours ({ongoingProjects.length})
              </TabsTrigger>
              <TabsTrigger 
                value="completed" 
                className="gap-2 text-base font-semibold data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground transition-all"
              >
                <CheckCircle weight="fill" className="w-4 h-4" />
                Réalisés ({completedProjects.length})
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="ongoing" className="space-y-8">
            <AnimatePresence mode="wait">
              {ongoingProjects.length > 0 ? (
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {ongoingProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 border-transparent hover:border-primary/20 h-full group">
                          <div className="relative overflow-hidden">
                            <ProjectImage project={project} />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="text-xl font-bold flex-1 group-hover:text-primary transition-colors">{project.title}</h3>
                              <motion.div 
                                className="flex items-center gap-1 bg-gradient-to-r from-primary/20 to-primary/10 px-3 py-1.5 rounded-full"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <Circle weight="fill" className="w-3 h-3 text-primary animate-pulse" />
                                <span className="text-xs font-semibold text-primary">En cours</span>
                              </motion.div>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {project.description}
                            </p>
                            {project.progress !== undefined && (
                              <div className="space-y-3 pt-4 border-t border-border/50">
                                <div className="flex items-center justify-between text-sm">
                                  <span className="font-semibold">Progression</span>
                                  <motion.span 
                                    className="text-3xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent"
                                    initial={{ scale: 1 }}
                                    whileInView={{ scale: [1, 1.1, 1] }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                  >
                                    {project.progress}%
                                  </motion.span>
                                </div>
                                <motion.div
                                  initial={{ scaleX: 0 }}
                                  whileInView={{ scaleX: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: 0.4 }}
                                  style={{ originX: 0 }}
                                >
                                  <Progress value={project.progress} className="h-2.5 bg-muted" />
                                </motion.div>
                                {project.funds && project.goal && (
                                  <div className="flex items-center justify-between text-sm pt-2">
                                    <span className="text-muted-foreground">Collecté: <strong className="text-foreground">{project.funds}</strong></span>
                                    <span className="text-muted-foreground">Objectif: <strong className="text-foreground">{project.goal}</strong></span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </Card>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-4">
                    <Circle className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground text-lg">Aucun projet en cours pour le moment</p>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="completed" className="space-y-8">
            <AnimatePresence mode="wait">
              {completedProjects.length > 0 ? (
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {completedProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 border-transparent hover:border-secondary/20 h-full group">
                          <div className="relative overflow-hidden">
                            <ProjectImage project={project} />
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                              <CheckCircle weight="fill" className="w-4 h-4" />
                              Terminé
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-green-500/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="p-6 space-y-4">
                            <div>
                              {project.year && (
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xs font-semibold text-muted-foreground bg-gradient-to-r from-muted to-muted/50 px-3 py-1 rounded-full">
                                    {project.year}
                                  </span>
                                </div>
                              )}
                              <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">{project.title}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {project.description}
                            </p>
                            {project.impact && (
                              <motion.div 
                                className="pt-4 border-t border-border/50"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                              >
                                <div className="bg-gradient-to-r from-green-50 to-green-50/50 border-2 border-green-200/50 rounded-xl p-4 hover:border-green-300/70 transition-colors">
                                  <p className="text-sm font-semibold text-green-700 flex items-center gap-2">
                                    <CheckCircle weight="fill" className="w-5 h-5 flex-shrink-0" />
                                    <span>{project.impact}</span>
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </Card>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-4">
                    <CheckCircle className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground text-lg">Aucun projet terminé pour le moment</p>
                </motion.div>
              )}
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
