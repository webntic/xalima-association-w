import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { CurrencyDollar, CreditCard, Heart, Users, GraduationCap } from '@phosphor-icons/react'

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')

  const predefinedAmounts = [10, 25, 50, 100, 250]

  const paymentMethods = [
    {
      name: 'Stripe',
      description: 'Carte bancaire sécurisée',
      icon: CreditCard,
      color: 'bg-purple-500'
    },
    {
      name: 'PayPal',
      description: 'PayPal entre amis',
      icon: CreditCard,
      color: 'bg-blue-500'
    },
    {
      name: 'Orange Money',
      description: 'Paiement mobile',
      icon: CreditCard,
      color: 'bg-orange-500'
    },
    {
      name: 'Wave Sénégal',
      description: 'Transfert rapide',
      icon: CreditCard,
      color: 'bg-cyan-500'
    }
  ]

  const impactStories = [
    {
      icon: GraduationCap,
      amount: '25€',
      impact: 'Fournitures scolaires pour 1 élève pendant 1 an'
    },
    {
      icon: Heart,
      amount: '50€',
      impact: 'Soins médicaux pour une mère et son enfant'
    },
    {
      icon: Users,
      amount: '100€',
      impact: 'Formation d\'un enseignant aux méthodes modernes'
    }
  ]

  const recentUpdates = [
    {
      date: 'Mars 2024',
      title: 'Nouvelle bibliothèque en construction',
      description: 'Grâce à vos dons, nous avons collecté 75% des fonds nécessaires.',
      amount: '75,000€'
    },
    {
      date: 'Février 2024',
      title: '50 bourses d\'études attribuées',
      description: 'Vos contributions permettent à 50 jeunes filles de poursuivre leurs études.',
      amount: '18,000€'
    },
    {
      date: 'Janvier 2024',
      title: 'Panneaux solaires installés',
      description: '3 écoles équipées pour un accès permanent à l\'électricité.',
      amount: '20,000€'
    }
  ]

  return (
    <div className="py-24 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CurrencyDollar className="w-10 h-10 text-accent" weight="fill" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Faire un Don</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Votre générosité transforme des vies. Chaque contribution compte pour offrir un avenir meilleur.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {impactStories.map((story, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <story.icon className="w-8 h-8 text-primary" weight="fill" />
              </div>
              <p className="text-2xl font-bold text-accent mb-2">{story.amount}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{story.impact}</p>
            </Card>
          ))}
        </div>

        <Card className="max-w-3xl mx-auto p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Choisissez votre montant</h3>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
            {predefinedAmounts.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedAmount(amount)
                  setCustomAmount('')
                }}
                className={`h-16 text-lg font-bold ${
                  selectedAmount === amount ? 'bg-accent hover:bg-accent/90' : ''
                }`}
              >
                {amount}€
              </Button>
            ))}
          </div>

          <div className="relative mb-8">
            <Separator className="mb-4" />
            <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-card px-3 text-sm text-muted-foreground">
              ou
            </span>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">Montant personnalisé</label>
            <div className="relative">
              <Input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setSelectedAmount(null)
                }}
                placeholder="Entrez un montant"
                className="h-14 text-lg pl-4 pr-12"
                min="1"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-muted-foreground">
                €
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-bold mb-4">Méthode de paiement</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.name}
                  className="flex items-center gap-3 p-4 border-2 rounded-lg hover:border-primary transition-colors group"
                >
                  <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center`}>
                    <method.icon className="w-6 h-6 text-white" weight="fill" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold group-hover:text-primary transition-colors">{method.name}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Button
            disabled={!selectedAmount && !customAmount}
            className="w-full h-14 text-lg gap-2 bg-accent hover:bg-accent/90"
          >
            <Heart weight="fill" />
            Faire un don de {selectedAmount || customAmount || '0'}€
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-4">
            Cette interface est une démonstration. Les paiements ne sont pas traités dans cette version.
          </p>
        </Card>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Impact de vos dons</h3>
          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {update.date}
                      </span>
                      <span className="text-lg font-bold text-accent">{update.amount}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">{update.title}</h4>
                    <p className="text-muted-foreground">{update.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
