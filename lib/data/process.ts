export interface ProcessStep {
  number: string
  title: string
  description: string
  details: string[]
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We listen first. Every project begins with a deep dive into your business — your goals, audience, competitive landscape, and the story you want to tell.',
    details: [
      'Stakeholder briefing and discovery call',
      'Brand audit (if existing identity)',
      'Audience profiling and persona mapping',
      'Project scope and success criteria',
    ],
  },
  {
    number: '02',
    title: 'Research',
    description:
      'We analyze your market, audit competitors, and identify creative opportunities that give your brand a genuine edge before a single concept is sketched.',
    details: [
      'Competitive landscape analysis',
      'Industry trend and visual audit',
      'Market positioning insights',
      'Creative opportunity mapping',
    ],
  },
  {
    number: '03',
    title: 'Strategy',
    description:
      'Every visual decision traces back to a business objective. We define your positioning, messaging framework, and creative direction before design begins.',
    details: [
      'Positioning and messaging framework',
      'Creative direction document',
      'Mood boards and visual exploration',
      'Project roadmap and milestone alignment',
    ],
  },
  {
    number: '04',
    title: 'Design',
    description:
      'Where strategy becomes art. We craft with obsessive attention to detail — iterating until every element earns its place and the whole exceeds the brief.',
    details: [
      'Concept development (up to 3 directions)',
      'High-fidelity design production',
      'Interaction design and prototyping',
      'Design system and component documentation',
    ],
  },
  {
    number: '05',
    title: 'Deliver',
    description:
      'Production-ready files, brand guidelines, and everything your team needs to maintain consistency — handed over with a comprehensive walkthrough.',
    details: [
      'Final production-ready file delivery',
      'Brand guideline documentation',
      'Developer handoff assets (where applicable)',
      'Usage and implementation walkthrough',
    ],
  },
  {
    number: '06',
    title: 'Support',
    description:
      'We don\'t disappear at launch. 30 days of post-delivery support and ongoing availability as your brand grows, adapts, and scales.',
    details: [
      '30-day post-delivery support window',
      'Minor revisions and asset adjustments',
      'Brand application guidance',
      'Ongoing retainer options available',
    ],
  },
]
