import logoFull from '@/assets/images/xalima-logo.svg'
import logoIcon from '@/assets/images/xalima-icon.svg'

interface XalimaLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  iconOnly?: boolean
}

export default function XalimaLogo({ className = '', size = 'md', iconOnly = false }: XalimaLogoProps) {
  const sizeClasses = {
    sm: iconOnly ? 'h-8' : 'h-8',
    md: iconOnly ? 'h-10' : 'h-12',
    lg: iconOnly ? 'h-12' : 'h-16'
  }

  return (
    <img
      src={iconOnly ? logoIcon : logoFull}
      alt="Xalima - L'éducation pour tous"
      className={`${sizeClasses[size]} w-auto ${className}`}
    />
  )
}
