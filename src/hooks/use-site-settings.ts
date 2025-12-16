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

export function useSiteSettings() {
  const [settings] = useKV<SiteSettings>('site-settings', defaultSettings)
  return settings || defaultSettings
}
