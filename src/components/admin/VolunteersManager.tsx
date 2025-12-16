import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { toast } from 'sonner'
import { Trash, Eye, MagnifyingGlass, Users, EnvelopeSimple, Phone, MapPin, Briefcase, HandHeart, Calendar } from '@phosphor-icons/react'

interface VolunteerApplication {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  skills: string
  interests: string
  availability: string
  submittedAt: string
}

export default function VolunteersManager() {
  const [volunteers, setVolunteers] = useKV<VolunteerApplication[]>('volunteer-applications', [])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedVolunteer, setSelectedVolunteer] = useState<VolunteerApplication | null>(null)
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false)

  const handleDeleteVolunteer = (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette candidature ?')) {
      setVolunteers((current) => (current || []).filter((v) => v.id !== id))
      toast.success('Candidature supprimée avec succès')
    }
  }

  const openDetailDialog = (volunteer: VolunteerApplication) => {
    setSelectedVolunteer(volunteer)
    setIsDetailDialogOpen(true)
  }

  const filteredVolunteers = volunteers?.filter((volunteer) =>
    `${volunteer.firstName} ${volunteer.lastName} ${volunteer.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  ) || []

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Gestion des bénévoles</h2>
          <p className="text-muted-foreground">
            Consultez et gérez les candidatures de bénévoles
          </p>
        </div>
        <div className="relative w-full sm:w-auto">
          <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Rechercher un bénévole..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full sm:w-80"
          />
        </div>
      </div>

      {filteredVolunteers.length > 0 ? (
        <div className="grid gap-4">
          {filteredVolunteers.map((volunteer) => (
            <Card key={volunteer.id} className="p-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">
                        {volunteer.firstName} {volunteer.lastName}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <EnvelopeSimple className="w-4 h-4" />
                          {volunteer.email}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {volunteer.phone}
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="whitespace-nowrap">
                      {new Date(volunteer.submittedAt).toLocaleDateString('fr-FR')}
                    </Badge>
                  </div>

                  {volunteer.address && (
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-muted-foreground">{volunteer.address}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-3 gap-3 pt-3">
                    {volunteer.skills && (
                      <div className="bg-muted/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold">Compétences</span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {volunteer.skills}
                        </p>
                      </div>
                    )}
                    {volunteer.interests && (
                      <div className="bg-muted/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <HandHeart className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold">Intérêts</span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {volunteer.interests}
                        </p>
                      </div>
                    )}
                    {volunteer.availability && (
                      <div className="bg-muted/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-xs font-semibold">Disponibilités</span>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {volunteer.availability}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex lg:flex-col gap-2 w-full lg:w-auto">
                  <Button
                    variant="outline"
                    className="gap-2 flex-1 lg:flex-none"
                    onClick={() => openDetailDialog(volunteer)}
                  >
                    <Eye className="w-4 h-4" />
                    Détails
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 flex-1 lg:flex-none text-destructive hover:text-destructive"
                    onClick={() => handleDeleteVolunteer(volunteer.id)}
                  >
                    <Trash className="w-4 h-4" />
                    Supprimer
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-12">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-2xl bg-muted mx-auto flex items-center justify-center">
              <Users className="w-10 h-10 text-muted-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                {searchTerm ? 'Aucun résultat' : 'Aucune candidature'}
              </h3>
              <p className="text-muted-foreground">
                {searchTerm
                  ? 'Aucun bénévole ne correspond à votre recherche'
                  : 'Les candidatures de bénévoles apparaîtront ici'}
              </p>
            </div>
          </div>
        </Card>
      )}

      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Détails de la candidature</DialogTitle>
            <DialogDescription>
              Informations complètes du bénévole
            </DialogDescription>
          </DialogHeader>
          {selectedVolunteer && (
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Prénom</Label>
                  <p className="text-lg font-semibold mt-1">{selectedVolunteer.firstName}</p>
                </div>
                <div>
                  <Label>Nom</Label>
                  <p className="text-lg font-semibold mt-1">{selectedVolunteer.lastName}</p>
                </div>
              </div>

              <div>
                <Label className="flex items-center gap-2">
                  <EnvelopeSimple className="w-4 h-4" />
                  Email
                </Label>
                <a
                  href={`mailto:${selectedVolunteer.email}`}
                  className="text-primary hover:underline mt-1 block"
                >
                  {selectedVolunteer.email}
                </a>
              </div>

              <div>
                <Label className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Téléphone
                </Label>
                <a
                  href={`tel:${selectedVolunteer.phone}`}
                  className="text-primary hover:underline mt-1 block"
                >
                  {selectedVolunteer.phone}
                </a>
              </div>

              {selectedVolunteer.address && (
                <div>
                  <Label className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Adresse
                  </Label>
                  <p className="mt-1">{selectedVolunteer.address}</p>
                </div>
              )}

              {selectedVolunteer.skills && (
                <div>
                  <Label className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Compétences et expérience
                  </Label>
                  <p className="mt-1 text-muted-foreground whitespace-pre-wrap">
                    {selectedVolunteer.skills}
                  </p>
                </div>
              )}

              {selectedVolunteer.interests && (
                <div>
                  <Label className="flex items-center gap-2">
                    <HandHeart className="w-4 h-4" />
                    Domaines d'intérêt
                  </Label>
                  <p className="mt-1 text-muted-foreground whitespace-pre-wrap">
                    {selectedVolunteer.interests}
                  </p>
                </div>
              )}

              {selectedVolunteer.availability && (
                <div>
                  <Label className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Disponibilités
                  </Label>
                  <p className="mt-1 text-muted-foreground whitespace-pre-wrap">
                    {selectedVolunteer.availability}
                  </p>
                </div>
              )}

              <div className="pt-4 border-t">
                <Label>Date de soumission</Label>
                <p className="mt-1 text-muted-foreground">
                  {new Date(selectedVolunteer.submittedAt).toLocaleString('fr-FR', {
                    dateStyle: 'long',
                    timeStyle: 'short'
                  })}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function Label({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-sm font-semibold text-muted-foreground ${className}`}>{children}</div>
}
