export interface Service {
  id: string
  title: string
  description: string
  icon: string
  category: string
}

export const services: Service[] = [
  {
    id: 'graphics-design',
    title: 'Graphics Design',
    description:
      'From concept to final artwork — compelling visuals for print, digital, and everything in between. Every pixel placed with purpose.',
    icon: 'Layers',
    category: 'Visual',
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity & Logo Design',
    description:
      'Complete brand systems — logo, color, typography, voice, and brand guidelines — that give your business an ownable, unmistakable identity.',
    icon: 'Fingerprint',
    category: 'Branding',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design (Web & Mobile)',
    description:
      'User experiences grounded in behavioral psychology and visual hierarchy. We design interfaces that are beautiful, intuitive, and conversion-focused.',
    icon: 'Monitor',
    category: 'Digital',
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description:
      'Award-worthy websites built for performance and conversion. From landing pages to enterprise portals — every interaction is intentional.',
    icon: 'Globe',
    category: 'Digital',
  },
  {
    id: 'mobile-app-design',
    title: 'Mobile App Design',
    description:
      'Native iOS and Android app designs that users love. Clean design systems, smooth user flows, and interfaces that reduce friction at every step.',
    icon: 'Smartphone',
    category: 'Digital',
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics & Visual Storytelling',
    description:
      'Animated logos, explainer videos, social reels, and broadcast graphics. We bring brands to life through purposeful motion and cinematic storytelling.',
    icon: 'Play',
    category: 'Motion',
  },
  {
    id: 'social-media-design',
    title: 'Social Media Content Design',
    description:
      'Thumb-stopping content systems for Instagram, LinkedIn, X, and beyond — templates, campaigns, and visual identities built for the feed.',
    icon: 'Share2',
    category: 'Digital',
  },
  {
    id: 'pitch-deck-design',
    title: 'Pitch Deck & Presentation Design',
    description:
      'Investor-grade pitch decks and corporate presentations that communicate your vision with clarity, confidence, and visual authority.',
    icon: 'Presentation',
    category: 'Strategy',
  },
  {
    id: 'event-marketing',
    title: 'Event Marketing & Collateral Design',
    description:
      'End-to-end event branding — logos, programmes, banners, digital templates, and social collateral that make every conference unforgettable.',
    icon: 'Calendar',
    category: 'Branding',
  },
  {
    id: 'print-digital-media',
    title: 'Digital & Print Media Design',
    description:
      'Brochures, flyers, billboards, reports, and digital ads — print-ready and pixel-perfect. Every format, every medium, consistently brilliant.',
    icon: 'FileText',
    category: 'Visual',
  },
  {
    id: 'product-branding',
    title: 'Product Branding',
    description:
      'Packaging, product identity, and launch campaigns that make your physical or digital product instantly recognizable on any shelf or screen.',
    icon: 'Package',
    category: 'Branding',
  },
  {
    id: '3d-design',
    title: '3D Design (Blender)',
    description:
      'Hyper-realistic 3D product renders, architectural visualizations, and spatial concepts that make imagined spaces and products look ready to buy.',
    icon: 'Box',
    category: 'Visual',
  },
  {
    id: 'creative-strategy',
    title: 'Creative Strategy & Consulting',
    description:
      'The thinking behind the making. We align creative decisions with business goals — defining your positioning, narrative, and visual direction.',
    icon: 'Lightbulb',
    category: 'Strategy',
  },
  {
    id: 'corporate-communications',
    title: 'Corporate Communications Design',
    description:
      'Annual reports, internal communications, investor decks, and official documents — designed with the authority and precision your organization demands.',
    icon: 'Building2',
    category: 'Strategy',
  },
]
