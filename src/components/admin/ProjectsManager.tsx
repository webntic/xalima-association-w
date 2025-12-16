import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { toast } from 'sonner'
import { Plus, Pencil, Trash, CheckCircle, Clock, Rocket } from '@phosphor-icons/react'
import { Progress } from '@/components/ui/progress'

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
  createdAt: string
}

export default function ProjectsManager() {
  const [projects, setProjects] = useKV<Project[]>('admin-projects', [])
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'ongoing' as 'ongoing' | 'completed',
    progress: '',
    funds: '',
    goal: '',
    impact: '',
    year: new Date().getFullYear().toString()
  })

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      status: 'ongoing',
      progress: '',
      funds: '',
      goal: '',
      impact: '',
      year: new Date().getFullYear().toString()
    })
  }

  const handleAddProject = () => {
    if (!formData.title || !formData.description) {
      toast.error('Veuillez remplir les champs obligatoires')
      return
    }

    const newProject: Project = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      status: formData.status,
      ...(formData.status === 'ongoing' && formData.progress && { progress: Number(formData.progress) }),
      ...(formData.status === 'ongoing' && formData.funds && { funds: formData.funds }),
      ...(formData.status === 'ongoing' && formData.goal && { goal: formData.goal }),
      ...(formData.status === 'completed' && formData.impact && { impact: formData.impact }),
      ...(formData.status === 'completed' && formData.year && { year: formData.year }),
      createdAt: new Date().toISOString()
    }

    setProjects((current) => [...(current || []), newProject])
    toast.success('Projet ajouté avec succès')
    setIsAddDialogOpen(false)
    resetForm()
  }

  const handleEditProject = () => {
    if (!editingProject || !formData.title || !formData.description) {
      toast.error('Veuillez remplir les champs obligatoires')
      return
    }

    setProjects((current) =>
      (current || []).map((p) =>
        p.id === editingProject.id
          ? {
              ...p,
              title: formData.title,
              description: formData.description,
              status: formData.status,
              ...(formData.status === 'ongoing' && formData.progress && { progress: Number(formData.progress) }),
              ...(formData.status === 'ongoing' && formData.funds && { funds: formData.funds }),
              ...(formData.status === 'ongoing' && formData.goal && { goal: formData.goal }),
              ...(formData.status === 'completed' && formData.impact && { impact: formData.impact }),
              ...(formData.status === 'completed' && formData.year && { year: formData.year })
            }
          : p
      )
    )
    toast.success('Projet mis à jour avec succès')
    setIsEditDialogOpen(false)
    setEditingProject(null)
    resetForm()
  }

  const handleDeleteProject = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      setProjects((current) => (current || []).filter((p) => p.id !== id))
      toast.success('Projet supprimé avec succès')
    }
  }

  const openEditDialog = (project: Project) => {
    setEditingProject(project)
    setFormData({
      title: project.title,
      description: project.description,
      status: project.status,
      progress: project.progress?.toString() || '',
      funds: project.funds || '',
      goal: project.goal || '',
      impact: project.impact || '',
      year: project.year || new Date().getFullYear().toString()
    })
    setIsEditDialogOpen(true)
  }

  const ProjectForm = ({ onSubmit }: { onSubmit: () => void }) => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Titre du projet *</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Ex: Construction de bibliothèque"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Décrivez le projet en détail..."
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">Statut *</Label>
        <Select
          value={formData.status}
          onValueChange={(value: 'ongoing' | 'completed') => setFormData({ ...formData, status: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ongoing">En cours</SelectItem>
            <SelectItem value="completed">Terminé</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {formData.status === 'ongoing' && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="progress">Progression (%)</Label>
              <Input
                id="progress"
                type="number"
                min="0"
                max="100"
                value={formData.progress}
                onChange={(e) => setFormData({ ...formData, progress: e.target.value })}
                placeholder="0-100"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="funds">Fonds collectés</Label>
              <Input
                id="funds"
                value={formData.funds}
                onChange={(e) => setFormData({ ...formData, funds: e.target.value })}
                placeholder="Ex: 50,000 €"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="goal">Objectif financier</Label>
            <Input
              id="goal"
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              placeholder="Ex: 100,000 €"
            />
          </div>
        </>
      )}

      {formData.status === 'completed' && (
        <>
          <div className="space-y-2">
            <Label htmlFor="impact">Impact</Label>
            <Input
              id="impact"
              value={formData.impact}
              onChange={(e) => setFormData({ ...formData, impact: e.target.value })}
              placeholder="Ex: 350 élèves bénéficiaires"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="year">Année de réalisation</Label>
            <Input
              id="year"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              placeholder="Ex: 2024"
            />
          </div>
        </>
      )}

      <DialogFooter>
        <Button onClick={onSubmit} className="w-full">
          {editingProject ? 'Mettre à jour' : 'Ajouter'} le projet
        </Button>
      </DialogFooter>
    </div>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Gestion des projets</h2>
          <p className="text-muted-foreground">Créez et gérez vos projets en cours et terminés</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2" onClick={() => resetForm()}>
              <Plus className="w-5 h-5" weight="bold" />
              Nouveau projet
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Ajouter un nouveau projet</DialogTitle>
              <DialogDescription>
                Remplissez les informations du projet. Les champs marqués d'un * sont obligatoires.
              </DialogDescription>
            </DialogHeader>
            <ProjectForm onSubmit={handleAddProject} />
          </DialogContent>
        </Dialog>
      </div>

      {projects && projects.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${
                project.status === 'ongoing' 
                  ? 'from-accent to-accent/60' 
                  : 'from-secondary to-secondary/60'
              }`} />
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {project.status === 'ongoing' ? (
                        <span className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-semibold">
                          <Clock weight="fill" className="w-3 h-3" />
                          En cours
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                          <CheckCircle weight="fill" className="w-3 h-3" />
                          Terminé
                        </span>
                      )}
                      {project.year && (
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                          {project.year}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => openEditDialog(project)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleDeleteProject(project.id)}
                    >
                      <Trash className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>

                {project.status === 'ongoing' && project.progress !== undefined && (
                  <div className="space-y-2 pt-4 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">Progression</span>
                      <span className="text-xl font-bold text-accent">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    {project.funds && project.goal && (
                      <div className="flex items-center justify-between text-sm pt-2">
                        <span className="text-muted-foreground">Collecté: <strong>{project.funds}</strong></span>
                        <span className="text-muted-foreground">Objectif: <strong>{project.goal}</strong></span>
                      </div>
                    )}
                  </div>
                )}

                {project.status === 'completed' && project.impact && (
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
        <Card className="p-12">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-2xl bg-muted mx-auto flex items-center justify-center">
              <Rocket className="w-10 h-10 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Aucun projet</h3>
              <p className="text-muted-foreground">Commencez par ajouter votre premier projet</p>
            </div>
          </div>
        </Card>
      )}

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Modifier le projet</DialogTitle>
            <DialogDescription>
              Modifiez les informations du projet. Les champs marqués d'un * sont obligatoires.
            </DialogDescription>
          </DialogHeader>
          <ProjectForm onSubmit={handleEditProject} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
