export interface SkillInterface {
  id: number
  name: string
  shortDescription: string
  proficiency: number
  description: string
  link: string
  awsKey: string
}

export interface SkillInfoInterface {
  type: string
  skill: SkillInterface
}

export interface SkillsInterface {
  languages: [SkillInterface]
  technologies: [SkillInterface]
  frameworks: [SkillInterface]
}
