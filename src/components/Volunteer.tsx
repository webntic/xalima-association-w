import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { toast } from 'sonner'
import { HandHeart, User, EnvelopeSimple, Phone, MapPin, Briefcase, Calendar, Check } from '@phosphor-icons/react'

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

export default function Volunteer() {
  const [applications, setApplications] = useKV<VolunteerApplication[]>('volunteer-applications', [])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    skills: '',
    interests: '',
    availability: ''
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

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast.error('Veuillez remplir tous les champs obligatoires')
      setIsSubmitting(false)
      return
    }

    const newApplication: VolunteerApplication = {
      id: Date.now().toString(),
      ...formData,
      submittedAt: new Date().toISOString()
    }

    setApplications((current) => [...(current || []), newApplication])

    toast.success('Merci pour votre candidature !', {
      description: 'Nous vous contacterons bientôt.'
    })

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      skills: '',
      interests: '',
      availability: ''
    })

    setIsSubmitting(false)
  }

  return (
    <div className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop&q=80" 
          alt="Volontaires aidant des enfants, représentant l'engagement communautaire"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <HandHeart className="w-10 h-10 text-primary" weight="fill" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Devenir Volontaire</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rejoignez notre équipe et contribuez à faire la différence dans la vie des enfants et des familles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Pourquoi devenir volontaire ?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" weight="bold" />
                  <span className="text-foreground">Participez à des projets concrets et impactants</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" weight="bold" />
                  <span className="text-foreground">Développez vos compétences et votre expérience</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" weight="bold" />
                  <span className="text-foreground">Rejoignez une communauté engagée et solidaire</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" weight="bold" />
                  <span className="text-foreground">Contribuez à un avenir meilleur pour tous</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Domaines d'intervention</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Éducation', 'Santé', 'Communication', 'Logistique', 'Fundraising', 'Événementiel'].map((domain) => (
                  <div key={domain} className="bg-muted rounded-lg px-4 py-2 text-sm font-medium text-center">
                    {domain}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Formulaire de candidature</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Prénom *
                  </Label>
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
                  <Label htmlFor="lastName" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nom *
                  </Label>
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
                <Label htmlFor="email" className="flex items-center gap-2">
                  <EnvelopeSimple className="w-4 h-4" />
                  Email *
                </Label>
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
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Téléphone *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+221 XX XXX XX XX"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Adresse
                </Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Votre adresse"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills" className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Compétences et expérience
                </Label>
                <Textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="Décrivez vos compétences et expériences pertinentes..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interests" className="flex items-center gap-2">
                  <HandHeart className="w-4 h-4" />
                  Domaines d'intérêt
                </Label>
                <Textarea
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  placeholder="Quels domaines vous intéressent le plus ?"
                  rows={2}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Disponibilités
                </Label>
                <Textarea
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder="Quand êtes-vous disponible ?"
                  rows={2}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-lg gap-2 bg-primary hover:bg-primary/90 mt-6"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Soumettre ma candidature'}
                <HandHeart weight="fill" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
