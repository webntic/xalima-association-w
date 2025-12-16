import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Gauge, Users, Rocket, Spinner, ArrowLeft, SignOut, Gear, EnvelopeSimple } from '@phosphor-icons/react'
import ProjectsManager from '@/components/admin/ProjectsManager'
import VolunteersManager from '@/components/admin/VolunteersManager'
import DashboardOverview from '@/components/admin/DashboardOverview'
import SiteSettingsManager from '@/components/admin/SiteSettingsManager'
import MessagesManager from '@/components/admin/MessagesManager'
import { toast } from 'sonner'

export default function AdminDashboard() {
  const [isOwner, setIsOwner] = useState<boolean | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const user = await window.spark.user()
        const loggedIn = await window.spark.kv.get<boolean>('admin-logged-in')
        
        setIsOwner(user?.isOwner || false)
        setIsLoggedIn(loggedIn || false)
      } catch (error) {
        setIsOwner(false)
        setIsLoggedIn(false)
      } finally {
        setIsLoading(false)
      }
    }

    checkAccess()
  }, [])

  const handleLogout = async () => {
    await window.spark.kv.delete('admin-logged-in')
    toast.success('Déconnexion réussie')
    navigate('/admin/login')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <Spinner className="w-12 h-12 text-primary animate-spin mx-auto" />
          <p className="text-muted-foreground">Vérification des permissions...</p>
        </div>
      </div>
    )
  }

  if (!isOwner || !isLoggedIn) {
    return <Navigate to="/admin/login" replace />
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <Gauge className="w-8 h-8 text-white" weight="fill" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Tableau de Bord Admin</h1>
                <p className="text-muted-foreground">Gérez votre site et vos contenus</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Retour au site
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="gap-2"
              >
                <SignOut className="w-5 h-5" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-8">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full max-w-4xl grid-cols-5">
            <TabsTrigger value="overview" className="gap-2">
              <Gauge className="w-4 h-4" />
              Vue d'ensemble
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Gear className="w-4 h-4" />
              Paramètres
            </TabsTrigger>
            <TabsTrigger value="projects" className="gap-2">
              <Rocket className="w-4 h-4" />
              Projets
            </TabsTrigger>
            <TabsTrigger value="volunteers" className="gap-2">
              <Users className="w-4 h-4" />
              Bénévoles
            </TabsTrigger>
            <TabsTrigger value="messages" className="gap-2">
              <EnvelopeSimple className="w-4 h-4" />
              Messages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <DashboardOverview />
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <SiteSettingsManager />
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <ProjectsManager />
          </TabsContent>

          <TabsContent value="volunteers" className="space-y-6">
            <VolunteersManager />
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <MessagesManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
