# Planning Guide

A modern, impactful website for Xalima, an educational nonprofit association dedicated to providing quality education and empowering students while supporting maternal and child health in underserved communities.

**Experience Qualities**:
1. **Inspiring** - The site should evoke hope and motivation through powerful imagery and compelling stories of impact
2. **Trustworthy** - Clear transparency in operations, donations, and project progress builds donor confidence and community trust
3. **Accessible** - Intuitive navigation and inclusive design ensures everyone can engage with Xalima's mission

**Complexity Level**: Light Application (multiple features with basic state)
This is a multi-page nonprofit website with React Router navigation, legal pages (privacy policy and legal notice), forms, dynamic content displays, state management for navigation and user interactions, and an admin dashboard for content management.

## Essential Features

### Homepage Hero & Introduction
- **Functionality**: Display mission statement "L'éducation pour tous", Xalima logo (custom SVG component), motivational imagery carousel, and quick navigation to key sections
- **Purpose**: Immediately communicate Xalima's purpose and inspire visitors to explore further
- **Trigger**: Page load
- **Progression**: Hero loads with animation → Carousel auto-rotates → User scrolls to introduction cards → Click cards to navigate to sections
- **Success criteria**: Hero displays correctly, logo renders properly, carousel auto-advances, navigation cards are clickable

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
- **Functionality**: Fully functional donation system with multiple payment methods (Stripe, PayPal, Orange Money, Wave) configured via admin dashboard
- **Purpose**: Facilitate financial support with transparency about impact and real payment processing
- **Trigger**: Prominent CTA buttons throughout site
- **Progression**: Navigate to donation page → Select or enter amount → Choose enabled payment method → Process payment (Stripe/PayPal redirect or mobile money instructions) → View donation impact updates
- **Success criteria**: Donation interface is clear, only enabled payment methods display, Stripe integration redirects correctly, PayPal links generate properly, mobile money shows transfer instructions with copyable phone numbers, impact updates visible

### Contact Section
- **Functionality**: Display contact information, social media links, contact form, and location map
- **Purpose**: Enable direct communication and showcase accessibility
- **Trigger**: Navigation menu or footer link
- **Progression**: Visit contact page → View address/phone/email → Submit contact form OR click social media links
- **Success criteria**: Form submits successfully, contact details display clearly, social links work

### Legal Pages
- **Functionality**: Display comprehensive legal notices and privacy policy in dedicated pages
- **Purpose**: Ensure legal compliance (RGPD/GDPR) and transparency with users
- **Trigger**: Footer links to "Mentions Légales" or "Politique de Confidentialité"
- **Progression**: Click footer link → Navigate to dedicated page → Read legal information → Navigate back via header
- **Success criteria**: Pages load correctly, all legal information is complete and accessible, navigation works seamlessly

### Admin Dashboard
- **Functionality**: Secure admin interface with password protection for managing site settings, logo (upload and size), header appearance, payment methods, projects, volunteer applications, and contact messages - accessible only to the site owner
- **Purpose**: Enable site owner to manage all site content, appearance, and payment configurations dynamically without code changes
- **Trigger**: Owner navigates to /admin/login → Authenticates with password → Access full admin dashboard
- **Progression**: Navigate to /admin/login → Enter password (creates password on first use) → Access dashboard → Manage site settings (logo upload with size control, contact info, social links, header height) → Configure payment methods (Stripe keys, PayPal email, Orange Money/Wave numbers) → Manage projects (add/edit/delete) → Review volunteers → Read and delete contact messages → Log out
- **Success criteria**: Password authentication works, owner-only access enforced, all CRUD operations sync to public site, logo upload supports image files, logo size adjusts in real-time preview, settings update across all pages, header height adjusts dynamically, payment methods enable/disable correctly with validation

## Edge Case Handling
- **Empty form submissions**: Display validation errors with clear messaging before allowing submission
- **Long volunteer descriptions**: Textarea with character limit and counter to prevent overflow
- **Missing images**: Graceful fallback with placeholder colors matching brand
- **Network delays**: Loading states for form submissions with visual feedback
- **Mobile navigation**: Collapsible hamburger menu for smaller screens
- **Multilingual switching**: Default to French with clear language selector (prototype shows UI structure)
- **Direct legal page access**: Legal pages accessible directly via URL, with header navigation intact
- **Navigation from legal pages**: Header logo and menu allow return to home page with smooth section scrolling
- **Unauthorized admin access**: Non-owners redirected to homepage automatically, loading state shown during permission check
- **Empty admin data**: Friendly empty states with illustrations when no projects or volunteers exist
- **Admin search no results**: Clear messaging when volunteer search returns no matches
- **No payment methods configured**: Donation page shows helpful message when no methods are enabled
- **Invalid payment credentials**: Admin UI validates and provides guidance for correct API key/credential formats
- **Header height bounds**: Header height input limited to 60-200px range for usability
- **Logo size bounds**: Logo size input limited to 20-200px range to maintain visual balance and usability
- **Mobile money instructions**: Dialog with copyable phone numbers and step-by-step transfer instructions

## Design Direction
The design should evoke hope, empowerment, and educational excellence while maintaining warmth and approachability. Visual language should balance professionalism with human connection, using the vibrant, energetic colors from the Xalima logo (bold pink, sky blue, and cheerful yellow) that represent passion, trust, and optimism, combined with clean modern layouts that inspire trust and action.

## Color Selection
A vibrant, energetic palette directly inspired by the Xalima logo colors - featuring bold pink, sky blue, and cheerful yellow that represent hope, education, and community connection.

- **Primary Color**: Vibrant Pink/Magenta `oklch(0.55 0.22 345)` (#E91E63) - Bold and energetic, representing passion for education and community empowerment; used for primary CTAs and key brand elements
- **Secondary Colors**: 
  - Sky Blue `oklch(0.65 0.16 235)` (#03A9F4) - Trust, clarity, and knowledge; used for informational sections and supporting elements
  - Fresh Green `oklch(0.70 0.14 130)` (#8BC34A) - Growth and sustainability; used for success states and progress indicators
- **Accent Color**: Warm Yellow `oklch(0.80 0.16 85)` (#FFC107) - Eye-catching optimism and hope; used for highlights, donation CTAs, and attention-grabbing elements
- **Foreground/Background Pairings**:
  - Primary Pink (`oklch(0.55 0.22 345)`): White text `oklch(1 0 0)` - Ratio 5.4:1 ✓
  - Secondary Blue (`oklch(0.65 0.16 235)`): White text `oklch(1 0 0)` - Ratio 4.8:1 ✓
  - Accent Yellow (`oklch(0.80 0.16 85)`): Dark text `oklch(0.25 0.02 280)` - Ratio 8.2:1 ✓
  - Background Light (`oklch(0.99 0.005 320)`): Dark text `oklch(0.25 0.02 280)` - Ratio 14.8:1 ✓

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
Le site utilise Framer Motion pour créer une expérience moderne et dynamique avec des animations fluides et engageantes. Le Hero intègre un effet de parallaxe au scroll, des transitions d'images sophistiquées avec zoom progressif (scale 1.1), des particules flottantes subtiles pour la profondeur, et des dégradés de motifs animés en arrière-plan. Les cards de navigation rapide ont des animations de hover avancées avec transformations 3D (translate-y: -8px, scale: 1.02), rotations d'icônes, et des dégradés révélés au survol. Toutes les sections utilisent whileInView pour révéler le contenu progressivement pendant le scroll avec des délais échelonnés créant un effet de cascade. Les projets affichent des barres de progression animées avec scaleX et des badges de statut avec des effets de pulse. Le Footer contient des blobs de couleur animés en arrière-plan avec mouvement infini, des icônes sociales avec rotation au hover, et un cœur pulsant. Toutes les interactions respectent les préférences de réduction de mouvement pour l'accessibilité.

## Component Selection

**Components**:
- **Card**: Project showcases, service offerings, quick navigation links, admin stats, and volunteer application cards - customized with hover lift effect (4px translate-y)
- **Button**: CTAs throughout site - Primary variant for donations (vibrant pink), Secondary for navigation actions (sky blue), Outline for tertiary actions, Icon variants for admin actions
- **Form + Input + Label + Textarea**: Volunteer registration, contact forms, and admin project creation - increased padding for touch-friendliness
- **Carousel**: Hero banner with embla-carousel-react for motivational imagery - auto-play enabled with 5s intervals
- **Progress**: Project progress thermometers - customized with fresh green fill and percentage labels
- **Separator**: Visual dividers between major sections and footer sections - subtle with reduced opacity
- **Sheet**: Mobile navigation menu - slides in from left with backdrop
- **Tabs**: Toggle between completed/ongoing projects and admin dashboard sections - underline indicator animation
- **Toast (Sonner)**: Form submission confirmations, error messages, and admin action feedback - positioned top-right
- **React Router**: Multi-page navigation with smooth transitions, scroll-to-top behavior, and protected admin route
- **Dialog**: Admin project creation/editing forms and volunteer detail views - modal overlays with backdrop
- **Badge**: Status indicators in admin dashboard (submission dates, project status)
- **Select**: Dropdown for project status selection in admin forms
- **Spinner**: Loading state indicator for admin authentication check

**Customizations**:
- Custom XalimaLogo component with dynamic sizing, supporting both default SVG logos and admin-uploaded custom logo images with adjustable height (20-200px)
- Custom hero section component with overlaid text and gradient overlay on carousel images
- Social media icon links component with hover color transitions
- Custom footer with multi-column layout adapting to single column on mobile, including legal page links and logo
- Payment method display cards (visual only in prototype) with recognizable logos
- Legal pages with comprehensive content (RGPD-compliant privacy policy, legal notices)
- Page-specific layouts for legal content with enhanced readability and iconography

**States**:
- **Buttons**: Default with solid fill, hover with brightness increase and scale 1.02, active with slight scale down 0.98, disabled with reduced opacity and no interaction
- **Inputs**: Default with border, focus with ring color (primary orange), error with red border and message, success with green border after validation
- **Cards**: Default with subtle shadow, hover with elevated shadow and slight lift, active/selected with border highlight

**Icon Selection**:
- **Navigation**: House (home), Users (about), Rocket (projects), HandHeart (volunteer), EnvelopeSimple (contact), CurrencyDollar (donate), Gauge (admin dashboard)
- **Social Media**: FacebookLogo, InstagramLogo, YoutubeLogo, TiktokLogo
- **Forms**: User, Envelope, Phone, MapPin, Briefcase, Calendar, Check (success), Warning (validation)
- **Actions**: ArrowRight (CTAs), CaretDown (dropdowns), X (close mobile menu), ArrowLeft (back to site)
- **Admin**: Plus (add new), Pencil (edit), Trash (delete), Eye (view details), MagnifyingGlass (search), CheckCircle (completed), Clock (ongoing), Spinner (loading)

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

## Configuration des Paiements

### PayPal
Pour configurer PayPal correctement :
1. Créez ou connectez-vous à votre compte PayPal
2. Activez PayPal.me sur votre compte (gratuit)
3. Choisissez votre nom d'utilisateur PayPal.me (exemple: "xalima")
4. Dans l'admin du site, activez PayPal et entrez UNIQUEMENT votre nom d'utilisateur (sans @paypal.me)
5. Le système génèrera automatiquement le lien: `https://www.paypal.com/paypalme/[votre-nom]/[montant]EUR`

**Important**: N'entrez PAS votre email PayPal, mais bien votre nom d'utilisateur PayPal.me

### Stripe
1. Créez un compte sur stripe.com
2. Récupérez votre clé publique (pk_test_... pour test, pk_live_... pour production)
3. Dans l'admin, activez Stripe et collez votre clé publique

### Orange Money & Wave
1. Entrez le numéro de téléphone associé à votre compte
2. Format: +221 XX XXX XX XX
3. Les donateurs recevront des instructions pour effectuer le transfert manuellement
