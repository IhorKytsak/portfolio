export type ExperienceEntry = {
  position: string
  projectName: string
  time: string
  industry: string
  domain: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export type Skills = {
  frontend: string[]
  backend: string[]
  other: string[]
}

export type SkillCategory = keyof Skills
