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
  logoSize?: number
}

export default function XalimaLogo({ className = '', size = 'md', iconOnly = false }: XalimaLogoProps) {
  const [customLogo, setCustomLogo] = useState<string | null>(null)
  const [logoSize, setLogoSize] = useState<number | null>(null)

  useEffect(() => {
    const loadCustomLogo = async () => {
      try {
        const settings = await window.spark.kv.get<SiteSettings>('site-settings')
        if (settings?.logoUrl) {
          setCustomLogo(settings.logoUrl)
        }
        if (settings?.logoSize) {
          setLogoSize(settings.logoSize)
        }
      } catch (error) {
        console.error('Failed to load custom logo:', error)
      }
    }

    loadCustomLogo()
  }, [])

  const defaultSizeClasses = {
    sm: iconOnly ? 'h-8' : 'h-8',
    md: iconOnly ? 'h-10' : 'h-12',
    lg: iconOnly ? 'h-12' : 'h-16'
  }

  const logoSrc = customLogo || (iconOnly ? logoIcon : logoFull)

  if (logoSize !== null && customLogo) {
    return (
      <img
        src={logoSrc}
        alt="Xalima - L'éducation pour tous"
        style={{ height: `${logoSize}px` }}
        className={`w-auto ${className}`}
      />
    )
  }

  return (
    <img
      src={logoSrc}
      alt="Xalima - L'éducation pour tous"
      className={`${defaultSizeClasses[size]} w-auto ${className}`}
    />
  )
}
