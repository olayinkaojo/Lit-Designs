export interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  review: string
  avatar: string
  projectSlug?: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'NBA Representative',
    title: 'Conference Organizing Committee',
    company: 'Nigerian Bar Association',
    review:
      'The branding Lit Creative Designs delivered for our 2024 Annual General Conference was nothing short of exceptional. Every touchpoint — from the conference logo to the event programme and social collateral — was polished, professional, and impactful. Olayinka understood exactly what the NBA brand needed to communicate.',
    avatar: '/images/clients/nba-client.jpg',
    projectSlug: 'nba-annual-conference-2024',
    rating: 5,
  },
  {
    id: '2',
    name: 'EcoFitness Client',
    title: 'Founder',
    company: 'EcoFitness Hub Nigeria',
    review:
      'Olayinka understood our vision immediately and translated it into a brand identity that truly represents who we are. The logo, color system, and guidelines he delivered gave us a premium, consistent look that\'s instantly recognizable. Outstanding work, delivered on time and on brief.',
    avatar: '/images/clients/ecofitness-client.jpg',
    projectSlug: 'ecofitness-hub-brand-identity',
    rating: 5,
  },
  {
    id: '3',
    name: 'International Startup Founder',
    title: 'CEO',
    company: 'U.S.-Based Tech Startup (Confidential)',
    review:
      'The UI/UX prototypes Olayinka designed for us exceeded every expectation. The attention to detail, the clean design system, and the way he translated our product vision into a compelling, investor-ready interface was remarkable. Our prototype directly helped us close our seed round. Highest recommendation.',
    avatar: '/images/clients/startup-client.jpg',
    projectSlug: 'startup-uiux-prototypes',
    rating: 5,
  },
  {
    id: '4',
    name: 'JOPAG Representative',
    title: 'Operations Director',
    company: 'JOPAG Logistics Ltd',
    review:
      'From the logo to the fleet wraps and uniforms, Lit Creative Designs gave us a brand we\'re proud to show up with every day. The consistency across every format — digital and physical — is something our previous agencies never achieved. A genuinely professional team.',
    avatar: '/images/clients/jopag-client.jpg',
    projectSlug: 'jopag-logistics-fleet-branding',
    rating: 5,
  },
  {
    id: '5',
    name: 'International Client',
    title: 'Marketing Lead',
    company: 'European Brand (Remote)',
    review:
      'Working with Olayinka remotely from Europe was seamless. He communicates clearly, delivers on time, and brings a creative perspective that genuinely elevated our brand. The 5-star rating on freelance platforms is absolutely earned.',
    avatar: '/images/clients/europe-client.jpg',
    rating: 5,
  },
]
