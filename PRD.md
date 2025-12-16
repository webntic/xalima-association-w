# Planning Guide

A modern, impactful website for Xalima, an educational nonprofit association dedicated to providing quality education and empowering students while supporting maternal and child health in underserved communities.

**Experience Qualities**:
1. **Inspiring** - The site should evoke hope and motivation through powerful imagery and compelling stories of impact
2. **Trustworthy** - Clear transparency in operations, donations, and project progress builds donor confidence and community trust
3. **Accessible** - Intuitive navigation and inclusive design ensures everyone can engage with Xalima's mission

**Complexity Level**: Light Application (multiple features with basic state)
This is a multi-page nonprofit website with forms, dynamic content displays, and state management for navigation and user interactions, but without complex backend integrations in this prototype phase.

## Essential Features

### Homepage Hero & Introduction
- **Functionality**: Display mission statement "L'éducation pour tous", logo, motivational imagery carousel, and quick navigation to key sections
- **Purpose**: Immediately communicate Xalima's purpose and inspire visitors to explore further
- **Trigger**: Page load
- **Progression**: Hero loads with animation → Carousel auto-rotates → User scrolls to introduction cards → Click cards to navigate to sections
- **Success criteria**: Hero displays correctly, carousel auto-advances, navigation cards are clickable

### About Section (A Propos)
- **Functionality**: Present comprehensive information about mission, objectives, and actions
- **Purpose**: Build credibility and explain Xalima's approach to education and community development
- **Trigger**: Navigation menu click or homepage card click
- **Progression**: Navigate to About → Read mission statement → Explore objectives (maternal health, education quality, sustainable development) → Review actions (awareness campaigns, policy advocacy, NGO partnerships)
- **Success criteria**: All content displays clearly with good readability and visual hierarchy

### Projects Showcase (Nos Projets)
- **Functionality**: Display completed and ongoing projects with progress indicators for active initiatives
- **Purpose**: Demonstrate impact and transparency through concrete examples
- **Trigger**: Navigation menu or homepage link
- **Progression**: View projects section → Filter between completed/ongoing → See project details with progress thermometer for active projects → View photos/testimonials
- **Success criteria**: Projects display with clear categorization, progress bars update visually, images load properly

### Volunteer Registration (Devenir volontaire)
- **Functionality**: Form to collect volunteer information (name, contact, skills, availability)
- **Purpose**: Enable community members to join Xalima's efforts
- **Trigger**: Navigation click or CTA button
- **Progression**: Open form → Fill required fields (name, email, phone, address, skills, interests, availability) → Submit → See confirmation message
- **Success criteria**: Form validates inputs, stores data in KV store, displays success confirmation

### Donation System (Faire un don)
- **Functionality**: Display donation options with multiple payment methods (information display only in prototype)
- **Purpose**: Facilitate financial support with transparency about impact
- **Trigger**: Prominent CTA buttons throughout site
- **Progression**: Navigate to donation page → Select or enter amount → See payment options (Stripe, PayPal, Orange Money, Wave Sénégal) → View donation impact updates
- **Success criteria**: Donation interface is clear, payment method information displays, impact updates visible

### Contact Section
- **Functionality**: Display contact information, social media links, contact form, and location map
- **Purpose**: Enable direct communication and showcase accessibility
- **Trigger**: Navigation menu or footer link
- **Progression**: Visit contact page → View address/phone/email → Submit contact form OR click social media links
- **Success criteria**: Form submits successfully, contact details display clearly, social links work

## Edge Case Handling
- **Empty form submissions**: Display validation errors with clear messaging before allowing submission
- **Long volunteer descriptions**: Textarea with character limit and counter to prevent overflow
- **Missing images**: Graceful fallback with placeholder colors matching brand
- **Network delays**: Loading states for form submissions with visual feedback
- **Mobile navigation**: Collapsible hamburger menu for smaller screens
- **Multilingual switching**: Default to French with clear language selector (prototype shows UI structure)

## Design Direction
The design should evoke hope, empowerment, and educational excellence while maintaining warmth and approachability. Visual language should balance professionalism with human connection, using vibrant colors that represent African culture and education, combined with clean modern layouts that inspire trust and action.

## Color Selection
A warm, energetic palette inspired by education, growth, and African vibrancy.

- **Primary Color**: Deep Orange `oklch(0.62 0.19 45)` - Represents warmth, energy, and the sun of education; used for primary CTAs and key brand elements
- **Secondary Colors**: 
  - Teal Blue `oklch(0.55 0.12 220)` - Trust, knowledge, and professionalism; used for informational sections
  - Warm Yellow `oklch(0.85 0.15 85)` - Optimism and hope; used for highlights and progress indicators
- **Accent Color**: Vibrant Coral `oklch(0.68 0.20 30)` - Eye-catching for donation CTAs and important calls-to-action
- **Foreground/Background Pairings**:
  - Primary (Deep Orange `oklch(0.62 0.19 45)`): White text `oklch(1 0 0)` - Ratio 5.2:1 ✓
  - Secondary Teal (`oklch(0.55 0.12 220)`): White text `oklch(1 0 0)` - Ratio 5.8:1 ✓
  - Accent Coral (`oklch(0.68 0.20 30)`): White text `oklch(1 0 0)` - Ratio 4.6:1 ✓
  - Background Light (`oklch(0.98 0.01 85)`): Dark text `oklch(0.25 0.02 45)` - Ratio 14.2:1 ✓

## Font Selection
Typography should be modern, highly readable, and convey both warmth and professionalism appropriate for an education-focused nonprofit.

- **Primary Font**: Plus Jakarta Sans - A geometric humanist sans-serif that balances contemporary design with approachability and excellent readability
- **Secondary Font**: Crimson Pro - An elegant serif for mission statements and impactful quotes, adding gravitas to key messaging

**Typographic Hierarchy**:
- H1 (Page Titles): Plus Jakarta Sans Bold / 48px / tight letter spacing (-0.02em) / line-height 1.1
- H2 (Section Headers): Plus Jakarta Sans Bold / 36px / tight letter spacing (-0.01em) / line-height 1.2
- H3 (Subsections): Plus Jakarta Sans SemiBold / 24px / normal letter spacing / line-height 1.3
- Body Text: Plus Jakarta Sans Regular / 16px / normal letter spacing / line-height 1.6
- Quotes/Mission: Crimson Pro SemiBold / 20px / normal letter spacing / line-height 1.5
- Buttons/CTAs: Plus Jakarta Sans SemiBold / 16px / slight letter spacing (0.01em)

## Animations
Animations should create a sense of growth, progress, and forward momentum while maintaining subtlety. Use gentle fade-ins for content sections on scroll, smooth transitions for carousel slides (800ms ease), progress bar fills with spring physics for project thermometers, and slight scale transforms on hover for interactive elements (buttons grow 1.02x). Volunteer and contact form submissions should include a satisfying checkmark animation. All animations respect reduced-motion preferences.

## Component Selection

**Components**:
- **Card**: Project showcases, service offerings, and quick navigation links from homepage - customized with hover lift effect (4px translate-y)
- **Button**: CTAs throughout site - Primary variant for donations (coral accent), Secondary for navigation actions, Outline for tertiary actions
- **Form + Input + Label + Textarea**: Volunteer registration and contact forms - increased padding for touch-friendliness
- **Carousel**: Hero banner with embla-carousel-react for motivational imagery - auto-play enabled with 5s intervals
- **Progress**: Project progress thermometers - customized with warm yellow fill and percentage labels
- **Separator**: Visual dividers between major sections - subtle with reduced opacity
- **Sheet**: Mobile navigation menu - slides in from left with backdrop
- **Tabs**: Toggle between completed/ongoing projects - underline indicator animation
- **Toast (Sonner)**: Form submission confirmations and error messages - positioned top-right

**Customizations**:
- Custom hero section component with overlaid text and gradient overlay on carousel images
- Social media icon links component with hover color transitions
- Custom footer with multi-column layout adapting to single column on mobile
- Payment method display cards (visual only in prototype) with recognizable logos

**States**:
- **Buttons**: Default with solid fill, hover with brightness increase and scale 1.02, active with slight scale down 0.98, disabled with reduced opacity and no interaction
- **Inputs**: Default with border, focus with ring color (primary orange), error with red border and message, success with green border after validation
- **Cards**: Default with subtle shadow, hover with elevated shadow and slight lift, active/selected with border highlight

**Icon Selection**:
- **Navigation**: House (home), Users (about), Rocket (projects), HandHeart (volunteer), EnvelopeSimple (contact), CurrencyDollar (donate)
- **Social Media**: FacebookLogo, InstagramLogo, YoutubeLogo, TiktokLogo
- **Forms**: User, Envelope, Phone, MapPin, Briefcase, Calendar, Check (success), Warning (validation)
- **Actions**: ArrowRight (CTAs), CaretDown (dropdowns), X (close mobile menu)

**Spacing**:
- Container max-width: 1280px with px-6 (mobile) / px-8 (tablet) / px-12 (desktop)
- Section vertical padding: py-16 (mobile) / py-24 (desktop)
- Card internal padding: p-6
- Grid gaps: gap-6 (mobile) / gap-8 (desktop)
- Form field spacing: space-y-4

**Mobile**:
- Navigation collapses to hamburger menu (Sheet component) at <768px
- Hero text sizing reduces: H1 from 48px to 32px, adjust padding
- Project grid: 1 column mobile, 2 columns tablet (768px), 3 columns desktop (1024px)
- Form inputs: full width on mobile, maintain touch-friendly 44px minimum height
- Footer: stack columns vertically on mobile, horizontal grid on desktop
- Carousel controls: larger touch targets on mobile (48px)
