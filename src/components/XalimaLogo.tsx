interface XalimaLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function XalimaLogo({ className = '', size = 'md' }: XalimaLogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  }

  return (
    <svg
      viewBox="0 0 600 200"
      className={`${sizeClasses[size]} w-auto ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="people-globe">
        <circle cx="80" cy="100" r="30" fill="#E91E63" />
        
        <ellipse cx="75" cy="95" rx="12" ry="15" fill="#fff" />
        <ellipse cx="85" cy="95" rx="12" ry="15" fill="#fff" />
        
        <path d="M 60 85 Q 50 70 45 55" stroke="#FFC107" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="45" cy="50" r="8" fill="#FFC107" />
        
        <path d="M 100 85 Q 110 70 115 55" stroke="#03A9F4" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="115" cy="50" r="8" fill="#03A9F4" />
        
        <path d="M 55 110 Q 40 125 30 140" stroke="#E91E63" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="145" r="8" fill="#E91E63" />
        
        <path d="M 105 110 Q 120 125 130 140" stroke="#8BC34A" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="130" cy="145" r="8" fill="#8BC34A" />
        
        <path d="M 50 95 Q 35 100 20 100" stroke="#E91E63" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="15" cy="100" r="8" fill="#E91E63" />
        
        <path d="M 110 95 Q 125 100 140 100" stroke="#03A9F4" strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="145" cy="100" r="8" fill="#03A9F4" />
      </g>

      <g id="xalima-text">
        <text
          x="170"
          y="120"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="700"
          fontSize="72"
          fill="#03A9F4"
          stroke="#E91E63"
          strokeWidth="3"
          paintOrder="stroke"
        >
          XALIMA
        </text>
      </g>

      <g id="tagline">
        <text
          x="170"
          y="155"
          fontFamily="'Crimson Pro', serif"
          fontWeight="600"
          fontSize="24"
          fill="#E91E63"
          letterSpacing="1"
        >
          L'ÉDUCATION POUR TOUS
        </text>
      </g>
    </svg>
  )
}
