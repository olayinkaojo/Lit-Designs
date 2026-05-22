export interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

export const stats: Stat[] = [
  {
    value: 8,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Delivering world-class creative work since 2015',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Across Africa, Europe, and North America',
  },
  {
    value: 5,
    suffix: '★',
    label: 'Client Rating',
    description: 'Consistent 5-star reviews on global platforms',
  },
  {
    value: 14,
    suffix: '',
    label: 'Service Disciplines',
    description: 'One studio, every creative need covered',
  },
]
