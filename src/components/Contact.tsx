import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { useSiteSettings } from '@/hooks/use-site-settings'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { 
  EnvelopeSimple, 
  Phone, 
  MapPin, 
  FacebookLogo, 
  InstagramLogo, 
  YoutubeLogo, 
  TiktokLogo,
  PaperPlaneRight
} from '@phosphor-icons/react'

interface ContactMessage {
  id: string
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
  submittedAt: string
}

export default function Contact() {
  const settings = useSiteSettings()
  const [messages, setMessages] = useKV<ContactMessage[]>('contact-messages', [])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast.error('Veuillez remplir tous les champs obligatoires')
      setIsSubmitting(false)
      return
    }

    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      ...formData,
      submittedAt: new Date().toISOString()
    }

    setMessages((current) => [...(current || []), newMessage])

    toast.success('Message envoyé !', {
      description: 'Nous vous répondrons dans les plus brefs délais.'
    })

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    })

    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: [settings.address],
      color: 'bg-primary'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: [settings.phone],
      color: 'bg-secondary'
    },
    {
      icon: EnvelopeSimple,
      title: 'Email',
      details: [settings.email],
      color: 'bg-accent'
    }
  ]

  const socialMedia = [
    { name: 'Facebook', icon: FacebookLogo, url: settings.facebookUrl, color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: InstagramLogo, url: settings.instagramUrl, color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: YoutubeLogo, url: settings.youtubeUrl, color: 'hover:text-red-600' },
    { name: 'TikTok', icon: TiktokLogo, url: settings.tiktokUrl, color: 'hover:text-black' }
  ]

  return (
    <div className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Contactez-nous</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className={`w-16 h-16 rounded-xl ${info.color} flex items-center justify-center mx-auto mb-4`}>
                <info.icon className="w-8 h-8 text-white" weight="fill" />
              </div>
              <h3 className="text-lg font-bold mb-3">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-muted-foreground">{detail}</p>
              ))}
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Votre prénom"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre message"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Écrivez votre message ici..."
                  rows={6}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-lg gap-2 bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                <PaperPlaneRight weight="fill" />
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
              <p className="text-muted-foreground mb-6">
                Restez connectés avec Xalima sur les réseaux sociaux pour suivre nos actualités et nos projets.
              </p>
              <div className="flex gap-4">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center transition-all hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-7 h-7" weight="fill" />
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lundi - Vendredi</span>
                  <span className="font-semibold">9h00 - 17h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Samedi</span>
                  <span className="font-semibold">9h00 - 13h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dimanche</span>
                  <span className="font-semibold">Fermé</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-3" weight="fill" />
                  <p className="text-lg font-semibold">Carte de localisation</p>
                  <p className="text-sm text-muted-foreground">Google Maps integration</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
