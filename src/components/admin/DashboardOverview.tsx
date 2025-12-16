import { useEffect, useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Card } from '@/components/ui/card'
import { Users, Rocket, CheckCircle, Clock, EnvelopeSimple } from '@phosphor-icons/react'

interface Project {
  id: string
  title: string
  status: 'ongoing' | 'completed'
}

interface VolunteerApplication {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  submittedAt: string
}

interface ContactMessage {
  id: string
  firstName: string
  lastName: string
  email: string
  submittedAt: string
}

export default function DashboardOverview() {
  const [projects] = useKV<Project[]>('admin-projects', [])
  const [volunteers] = useKV<VolunteerApplication[]>('volunteer-applications', [])
  const [messages] = useKV<ContactMessage[]>('contact-messages', [])

  const stats = [
    {
      label: 'Total Bénévoles',
      value: volunteers?.length || 0,
      icon: Users,
      color: 'bg-primary',
      gradient: 'from-primary to-primary/60'
    },
    {
      label: 'Messages reçus',
      value: messages?.length || 0,
      icon: EnvelopeSimple,
      color: 'bg-accent',
      gradient: 'from-accent to-accent/60'
    },
    {
      label: 'Projets en cours',
      value: projects?.filter(p => p.status === 'ongoing').length || 0,
      icon: Clock,
      color: 'bg-secondary',
      gradient: 'from-secondary to-secondary/60'
    },
    {
      label: 'Projets terminés',
      value: projects?.filter(p => p.status === 'completed').length || 0,
      icon: CheckCircle,
      color: 'bg-primary',
      gradient: 'from-primary/80 to-primary/40'
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Vue d'ensemble</h2>
        <p className="text-muted-foreground">Statistiques générales de la plateforme</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="overflow-hidden">
            <div className={`h-2 bg-gradient-to-r ${stat.gradient}`} />
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" weight="fill" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{stat.value}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" weight="fill" />
            Candidatures récentes
          </h3>
          {volunteers && volunteers.length > 0 ? (
            <div className="space-y-3">
              {volunteers.slice(-5).reverse().map((volunteer) => (
                <div key={volunteer.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-semibold">{volunteer.firstName} {volunteer.lastName}</p>
                    <p className="text-sm text-muted-foreground">{volunteer.email}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(volunteer.submittedAt).toLocaleDateString('fr-FR')}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">Aucune candidature pour le moment</p>
          )}
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-primary" weight="fill" />
            Projets actifs
          </h3>
          {projects && projects.filter(p => p.status === 'ongoing').length > 0 ? (
            <div className="space-y-3">
              {projects.filter(p => p.status === 'ongoing').slice(0, 5).map((project) => (
                <div key={project.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <p className="font-semibold">{project.title}</p>
                  </div>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                    En cours
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">Aucun projet actif</p>
          )}
        </Card>
      </div>
    </div>
  )
}
