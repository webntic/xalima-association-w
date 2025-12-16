import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LockKey, Spinner } from '@phosphor-icons/react'
import { toast } from 'sonner'
import XalimaLogo from '@/components/XalimaLogo'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const user = await window.spark.user()
      
      if (!user?.isOwner) {
        toast.error('Accès refusé', {
          description: 'Vous devez être le propriétaire de l\'application pour accéder à cette page.'
        })
        setIsLoading(false)
        return
      }

      const storedPassword = await window.spark.kv.get<string>('admin-password')
      
      if (!storedPassword) {
        await window.spark.kv.set('admin-password', password)
        await window.spark.kv.set('admin-logged-in', true)
        toast.success('Mot de passe créé', {
          description: 'Votre mot de passe admin a été créé avec succès.'
        })
        navigate('/admin')
      } else if (storedPassword === password) {
        await window.spark.kv.set('admin-logged-in', true)
        toast.success('Connexion réussie', {
          description: 'Bienvenue dans le tableau de bord admin.'
        })
        navigate('/admin')
      } else {
        toast.error('Mot de passe incorrect', {
          description: 'Le mot de passe que vous avez saisi est incorrect.'
        })
      }
    } catch (error) {
      toast.error('Erreur de connexion', {
        description: 'Une erreur est survenue lors de la connexion.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <XalimaLogo size="lg" />
          </div>
          <div className="text-center">
            <CardTitle className="text-2xl">Connexion Admin</CardTitle>
            <CardDescription className="mt-2">
              Entrez votre mot de passe pour accéder au tableau de bord
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="relative">
                <LockKey className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez votre mot de passe"
                  className="pl-10"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner className="animate-spin" />
                  Connexion en cours...
                </>
              ) : (
                <>
                  <LockKey />
                  Se connecter
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
