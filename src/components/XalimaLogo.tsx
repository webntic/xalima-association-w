import { useEffect, useState } from 'react'
import logoFull from '@/assets/images/xalima-logo.svg'
import logoIcon from '@/assets/images/xalima-icon.svg'

interface XalimaLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  iconOnly?: boolean
}

interface SiteSettings {
  logoUrl?: string
}

export default function XalimaLogo({ className = '', size = 'md', iconOnly = false }: XalimaLogoProps) {
  const [customLogo, setCustomLogo] = useState<string | null>(null)

  useEffect(() => {
    const loadCustomLogo = async () => {
      try {
        const settings = await window.spark.kv.get<SiteSettings>('site-settings')
        if (settings?.logoUrl) {
          setCustomLogo(settings.logoUrl)
        }
      } catch (error) {
        console.error('Failed to load custom logo:', error)
      }
    }

    loadCustomLogo()
  }, [])

  const sizeClasses = {
    sm: iconOnly ? 'h-8' : 'h-8',
    md: iconOnly ? 'h-10' : 'h-12',
    lg: iconOnly ? 'h-12' : 'h-16'
  }

  const logoSrc = customLogo || (iconOnly ? logoIcon : logoFull)

  return (
    <img
      src={logoSrc}
      alt="Xalima - L'éducation pour tous"
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  )
}
