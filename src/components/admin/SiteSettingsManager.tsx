import { useEffect, useState, useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { FloppyDisk, Image as ImageIcon, Trash } from '@phosphor-icons/react'
import { useKV } from '@github/spark/hooks'

interface SiteSettings {
  siteName: string
  slogan: string
  description: string
  email: string
  phone: string
  address: string
  facebookUrl: string
  instagramUrl: string
  youtubeUrl: string
  tiktokUrl: string
  logoUrl: string
}

const defaultSettings: SiteSettings = {
  siteName: 'Xalima',
  slogan: 'L\'éducation pour tous',
  description: 'Association dédiée à l\'éducation et au développement durable',
  email: 'contact@xalima.org',
  phone: '+221 XX XXX XX XX',
  address: 'Dakar, Sénégal',
  facebookUrl: 'https://facebook.com/xalima',
  instagramUrl: 'https://instagram.com/xalima',
  youtubeUrl: 'https://youtube.com/@xalima',
  tiktokUrl: 'https://tiktok.com/@xalima',
  logoUrl: ''
}

export default function SiteSettingsManager() {
  const [settings, setSettings, deleteSettings] = useKV<SiteSettings>('site-settings', defaultSettings)
  const [localSettings, setLocalSettings] = useState<SiteSettings>(settings || defaultSettings)
  const [logoPreview, setLogoPreview] = useState<string>(settings?.logoUrl || '')
  const [isUploading, setIsUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (settings) {
      setLocalSettings(settings)
      setLogoPreview(settings.logoUrl || '')
    }
  }, [settings])

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      toast.error('Format invalide', {
        description: 'Veuillez sélectionner une image (PNG, JPG, SVG, etc.)'
      })
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Fichier trop volumineux', {
        description: 'La taille maximale est de 5 Mo'
      })
      return
    }

    setIsUploading(true)

    try {
      const reader = new FileReader()
      reader.onload = async (event) => {
        const base64String = event.target?.result as string
        setLogoPreview(base64String)
        setLocalSettings(prev => ({ ...prev, logoUrl: base64String }))
        
        toast.success('Logo chargé', {
          description: 'N\'oubliez pas de sauvegarder les modifications'
        })
      }
      reader.readAsDataURL(file)
    } catch (error) {
      toast.error('Erreur', {
        description: 'Impossible de charger l\'image'
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleRemoveLogo = () => {
    setLogoPreview('')
    setLocalSettings(prev => ({ ...prev, logoUrl: '' }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    toast.info('Logo supprimé', {
      description: 'N\'oubliez pas de sauvegarder les modifications'
    })
  }

  const handleSave = async () => {
    try {
      await setSettings(localSettings)
      toast.success('Paramètres sauvegardés', {
        description: 'Les modifications ont été enregistrées avec succès'
      })
    } catch (error) {
      toast.error('Erreur', {
        description: 'Impossible de sauvegarder les paramètres'
      })
    }
  }

  const handleChange = (field: keyof SiteSettings, value: string) => {
    setLocalSettings(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Logo du site</CardTitle>
          <CardDescription>
            Importez le logo de votre association (PNG, JPG, SVG - max 5 Mo)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center gap-4">
            {logoPreview ? (
              <div className="relative group">
                <img
                  src={logoPreview}
                  alt="Logo preview"
                  className="max-h-32 w-auto object-contain rounded-lg border-2 border-border"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={handleRemoveLogo}
                >
                  <Trash />
                </Button>
              </div>
            ) : (
              <div className="w-full max-w-xs h-32 border-2 border-dashed border-border rounded-lg flex items-center justify-center bg-muted/30">
                <div className="text-center text-muted-foreground">
                  <ImageIcon className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Aucun logo importé</p>
                </div>
              </div>
            )}
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="gap-2"
              >
                <ImageIcon />
                {logoPreview ? 'Changer le logo' : 'Importer un logo'}
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Informations générales</CardTitle>
          <CardDescription>
            Modifiez les informations principales de votre site
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="siteName">Nom du site</Label>
              <Input
                id="siteName"
                value={localSettings.siteName}
                onChange={(e) => handleChange('siteName', e.target.value)}
                placeholder="Xalima"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slogan">Slogan</Label>
              <Input
                id="slogan"
                value={localSettings.slogan}
                onChange={(e) => handleChange('slogan', e.target.value)}
                placeholder="L'éducation pour tous"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={localSettings.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Description de votre association"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Coordonnées</CardTitle>
          <CardDescription>
            Informations de contact de votre association
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={localSettings.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="contact@xalima.org"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                type="tel"
                value={localSettings.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+221 XX XXX XX XX"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Adresse</Label>
            <Input
              id="address"
              value={localSettings.address}
              onChange={(e) => handleChange('address', e.target.value)}
              placeholder="Dakar, Sénégal"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Réseaux sociaux</CardTitle>
          <CardDescription>
            Liens vers vos pages sur les réseaux sociaux
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="facebookUrl">Facebook</Label>
              <Input
                id="facebookUrl"
                type="url"
                value={localSettings.facebookUrl}
                onChange={(e) => handleChange('facebookUrl', e.target.value)}
                placeholder="https://facebook.com/xalima"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="instagramUrl">Instagram</Label>
              <Input
                id="instagramUrl"
                type="url"
                value={localSettings.instagramUrl}
                onChange={(e) => handleChange('instagramUrl', e.target.value)}
                placeholder="https://instagram.com/xalima"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="youtubeUrl">YouTube</Label>
              <Input
                id="youtubeUrl"
                type="url"
                value={localSettings.youtubeUrl}
                onChange={(e) => handleChange('youtubeUrl', e.target.value)}
                placeholder="https://youtube.com/@xalima"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tiktokUrl">TikTok</Label>
              <Input
                id="tiktokUrl"
                type="url"
                value={localSettings.tiktokUrl}
                onChange={(e) => handleChange('tiktokUrl', e.target.value)}
                placeholder="https://tiktok.com/@xalima"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="gap-2" size="lg">
          <FloppyDisk weight="fill" />
          Sauvegarder les modifications
        </Button>
      </div>
    </div>
  )
}
