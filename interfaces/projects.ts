export interface ProjectInterface {
  id: number
  name: string
  startDate: string
  endDate: string
  awsKey: string
  features: string
  linkName: string
  description: string
  link: string
}

export interface ProjectInfoInterface {
  project: ProjectInterface
}

export interface ProjectArrayInterface {
  projects: [ProjectInterface]
}
