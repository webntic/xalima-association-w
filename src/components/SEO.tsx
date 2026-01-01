import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonical?: string
  noindex?: boolean
}

export default function SEO({
  title = "Xalima - L'éducation pour tous",
  description = "Association dédiée à l'éducation de qualité, la santé maternelle et infantile, et le développement durable des communautés en Afrique.",
  keywords = "éducation, Afrique, santé maternelle, ONG, association, développement durable, volontariat, don, Xalima",
  ogImage = "/og-image.jpg",
  canonical,
  noindex = false
}: SEOProps) {
  useEffect(() => {
    document.title = title

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name'
      let meta = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute(attribute, name)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow')
    } else {
      updateMetaTag('robots', 'index, follow')
    }

    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', ogImage, true)
    
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', ogImage)

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
    }
  }, [title, description, keywords, ogImage, canonical, noindex])

  return null
}
