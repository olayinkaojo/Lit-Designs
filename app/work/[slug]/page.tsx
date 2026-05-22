import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { portfolioProjects } from '@/lib/data/portfolio'
import { CaseStudy } from '@/components/pages/CaseStudy'
import { SITE } from '@/lib/constants'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = portfolioProjects.find((p) => p.slug === params.slug)
  if (!project) return { title: 'Project Not Found' }

  return {
    title: `${project.title} — Case Study | ${SITE.name}`,
    description: `${project.description} ${project.outcome}`,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.coverImage, width: 1200, height: 630, alt: project.title }],
    },
  }
}

export default function CaseStudyPage({ params }: Props) {
  const project = portfolioProjects.find((p) => p.slug === params.slug)
  if (!project) notFound()
  return <CaseStudy project={project} />
}
