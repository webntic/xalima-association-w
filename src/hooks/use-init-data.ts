import { useEffect } from 'react'
import { useKV } from '@github/spark/hooks'

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

const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Construction d\'une école primaire',
    description: 'Construction d\'une nouvelle école primaire dans le village de Thiès pour accueillir 200 élèves. Le projet comprend 6 salles de classe, une bibliothèque et une cour de récréation.',
    status: 'ongoing',
    progress: 65,
    funds: '45,000€',
    goal: '70,000€',
    images: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80'
    ],
    createdAt: new Date('2024-01-15').toISOString()
  },
  {
    id: '2',
    title: 'Programme de nutrition maternelle',
    description: 'Programme de soutien nutritionnel pour 150 mères et leurs enfants. Distribution de compléments alimentaires et sessions d\'éducation sur la nutrition infantile.',
    status: 'ongoing',
    progress: 80,
    funds: '28,000€',
    goal: '35,000€',
    images: [
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=600&fit=crop&q=80'
    ],
    createdAt: new Date('2024-02-10').toISOString()
  },
  {
    id: '3',
    title: 'Distribution de fournitures scolaires',
    description: 'Distribution de 500 kits scolaires comprenant cahiers, stylos, crayons et livres aux élèves de zones rurales défavorisées.',
    status: 'ongoing',
    progress: 40,
    funds: '8,500€',
    goal: '20,000€',
    images: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop&q=80'
    ],
    createdAt: new Date('2024-03-05').toISOString()
  },
  {
    id: '4',
    title: 'Rénovation de l\'école de Dakar',
    description: 'Rénovation complète de l\'école primaire de Dakar incluant la réparation des toits, la peinture des murs et l\'installation de nouvelles fenêtres. 350 élèves ont retrouvé un environnement d\'apprentissage sain et sécurisé.',
    status: 'completed',
    year: '2023',
    impact: '350 élèves bénéficiaires',
    images: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop&q=80'
    ],
    createdAt: new Date('2023-06-20').toISOString()
  },
  {
    id: '5',
    title: 'Formation des enseignants',
    description: 'Programme de formation continue pour 50 enseignants sur les méthodes pédagogiques modernes et l\'utilisation des technologies éducatives.',
    status: 'completed',
    year: '2023',
    impact: '50 enseignants formés, 1200 élèves impactés',
    images: [
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80'
    ],
    createdAt: new Date('2023-09-15').toISOString()
  },
  {
    id: '6',
    title: 'Jardin potager communautaire',
    description: 'Création d\'un jardin potager géré par les femmes de la communauté pour assurer l\'autonomie alimentaire et générer des revenus. Formation à l\'agriculture durable et aux techniques de permaculture.',
    status: 'completed',
    year: '2022',
    impact: '45 familles bénéficiaires, autonomie alimentaire renforcée',
    images: [
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop&q=80'
    ],
    createdAt: new Date('2022-11-10').toISOString()
  }
]

export function useInitData() {
  const [projects, setProjects] = useKV<Project[]>('admin-projects', [])

  useEffect(() => {
    if (!projects || projects.length === 0) {
      setProjects(sampleProjects)
    }
  }, [])
}
