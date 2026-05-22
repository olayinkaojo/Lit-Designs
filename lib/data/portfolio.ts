export type PortfolioCategory = 'All' | 'Branding' | 'UI/UX' | 'Print' | 'Social' | 'Event'

export interface PortfolioProject {
  slug: string
  title: string
  client: string
  category: PortfolioCategory
  tags: string[]
  year: string
  description: string
  overview: string
  role: string
  tools: string[]
  industry: string
  outcome: string
  coverImage: string
  images: string[]
  color: string
  featured: boolean
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'nba-annual-conference-2024',
    title: 'NBA Annual General Conference 2024',
    client: 'Nigerian Bar Association (NBA)',
    category: 'Event',
    tags: ['Brand Identity', 'Event Design', 'Conference Branding', 'Digital Marketing', 'Print'],
    year: '2024',
    description:
      'Complete visual identity for Nigeria\'s premier legal conference — official logo, brand guide, digital marketing templates, event programme, banners, and full social media collateral.',
    overview:
      'The Nigerian Bar Association trusted Lit Creative Designs to brand their flagship 2024 Annual General Conference — one of the most visible legal events in Africa. The brief was clear: create a visual identity that commands the authority of the institution while feeling modern, accessible, and nationally significant. We delivered a complete brand campaign from a bespoke conference logo through to all physical and digital touchpoints.',
    role: 'Lead Designer & Brand Strategist',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
    industry: 'Legal / Professional Association',
    outcome:
      'Successfully branded a nationally televised event attended by thousands of legal professionals across Nigeria. The identity was described by NBA officials as "the most cohesive conference brand the association has produced."',
    coverImage: '/projects/nba-conference-cover.jpg',
    images: [
      '/projects/nba-conference-1.jpg',
      '/projects/nba-conference-2.jpg',
      '/projects/nba-conference-3.jpg',
      '/projects/nba-conference-4.jpg',
    ],
    color: '#1A3A5C',
    featured: true,
  },
  {
    slug: 'ecofitness-hub-brand-identity',
    title: 'EcoFitness Hub Nigeria — Brand Identity',
    client: 'EcoFitness Hub Nigeria',
    category: 'Branding',
    tags: ['Logo Design', 'Brand Identity', 'Color System', 'Brand Guidelines', 'Marketing Collateral'],
    year: '2023',
    description:
      'Full logo and brand identity system for a fast-growing Nigerian fitness hub — color system, typography, brand guidelines, and marketing collateral.',
    overview:
      'EcoFitness Hub needed a brand identity that could compete in the rapidly growing Nigerian wellness market while communicating their commitment to eco-conscious fitness. We built a complete visual system — from the primary logo through to typography, color, and usage guidelines — that established EcoFitness as a premium, credible, and aspirational fitness brand.',
    role: 'Brand Designer',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    industry: 'Health & Wellness / Fitness',
    outcome:
      'Established a consistent, premium visual identity that positioned EcoFitness Hub as a leading brand in the Nigerian wellness market. Client reported a measurable increase in brand recognition and membership inquiries within the first quarter of the rebrand.',
    coverImage: '/projects/ecofitness-cover.jpg',
    images: [
      '/projects/ecofitness-1.jpg',
      '/projects/ecofitness-2.jpg',
      '/projects/ecofitness-3.jpg',
    ],
    color: '#2E7D32',
    featured: true,
  },
  {
    slug: 'jopag-logistics-fleet-branding',
    title: 'JOPAG Logistics Ltd — Fleet & Digital Branding',
    client: 'JOPAG Logistics Ltd',
    category: 'Branding',
    tags: ['Brand Identity', 'Fleet Design', 'Vehicle Wraps', 'Uniforms', 'Print'],
    year: '2023',
    description:
      'Complete branding project — logo, fleet vehicle wraps, uniforms, digital marketing templates, and brand guide for a Nigerian logistics company.',
    overview:
      'JOPAG Logistics needed a professional, authoritative brand presence that would command trust on the road and online. We designed every touchpoint — from the primary logo and brand system, to full vehicle wrap graphics for their fleet, staff uniforms, and a suite of digital marketing assets. The result was a brand that looks as reliable as the service it represents.',
    role: 'Brand Designer',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'CorelDRAW'],
    industry: 'Logistics & Transportation',
    outcome:
      'Professional, unified brand presence across all fleet and digital touchpoints. The rebrand elevated JOPAG\'s perceived value, supporting their positioning as a premium logistics provider in the Nigerian market.',
    coverImage: '/projects/jopag-cover.jpg',
    images: [
      '/projects/jopag-1.jpg',
      '/projects/jopag-2.jpg',
      '/projects/jopag-3.jpg',
    ],
    color: '#B45309',
    featured: true,
  },
  {
    slug: 'startup-uiux-prototypes',
    title: 'U.S. & U.K. Startup UI/UX Prototypes',
    client: 'Confidential (International Tech Startups)',
    category: 'UI/UX',
    tags: ['UI/UX Design', 'Figma', 'Prototyping', 'SaaS', 'Investor Decks'],
    year: '2022–2024',
    description:
      'High-fidelity UI/UX prototypes for multiple U.S. and U.K.-based startups, used in investor pitch decks and product demos.',
    overview:
      'Across multiple confidential engagements, we designed complete UI/UX prototypes for technology startups based in the United States and United Kingdom. Each project involved deep collaboration with founders to translate product vision into high-fidelity design systems — clean component libraries, detailed user flows, and conversion-focused interfaces ready for investor presentations and technical handoff.',
    role: 'UI/UX Designer',
    tools: ['Figma', 'Adobe XD'],
    industry: 'Tech / SaaS',
    outcome:
      'Prototypes contributed directly to successful investor presentations and funding rounds. Multiple founders specifically credited the quality of the design work as a key factor in building investor confidence during pitches.',
    coverImage: '/projects/startup-uiux-cover.jpg',
    images: [
      '/projects/startup-uiux-1.jpg',
      '/projects/startup-uiux-2.jpg',
    ],
    color: '#5B21B6',
    featured: true,
  },
]

export const portfolioCategories: PortfolioCategory[] = ['All', 'Branding', 'UI/UX', 'Print', 'Social', 'Event']
