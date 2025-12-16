import { useKV } from '@github/spark/hooks'

export interface SiteSettings {
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
  logoSize: number
  logoPosition: 'left' | 'center' | 'right'
  footerLogoPosition: 'left' | 'center' | 'right'
  headerHeight: number
  stripePublicKey: string
  stripeEnabled: boolean
  paypalEmail: string
  paypalEnabled: boolean
  orangeMoneyNumber: string
  orangeMoneyEnabled: boolean
  waveNumber: string
  waveEnabled: boolean
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
  logoUrl: '',
  logoSize: 48,
  logoPosition: 'left',
  footerLogoPosition: 'left',
  headerHeight: 80,
  stripePublicKey: '',
  stripeEnabled: false,
  paypalEmail: '',
  paypalEnabled: false,
  orangeMoneyNumber: '',
  orangeMoneyEnabled: false,
  waveNumber: '',
  waveEnabled: false
}

export function useSiteSettings() {
  const [settings] = useKV<SiteSettings>('site-settings', defaultSettings)
  return settings || defaultSettings
}
