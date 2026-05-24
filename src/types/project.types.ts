import type { StaticImageData } from 'next/image'

export type Project = {
  title: string
  description: string
  images: StaticImageData[]
  technologies: string[]
  gitHubUrl?: string
  visitUrl?: string
}
