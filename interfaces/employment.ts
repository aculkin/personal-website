export interface EmploymentInterface {
  id: number
  companyName: string
  startDate: string
  endDate: string
  awsKey: string
  description: string
  internship?: boolean
  companyWebsiteLink: string
}

export interface EmploymentInfoInterface {
  company: EmploymentInterface
}

export interface EmploymentArrayInterface {
  employment: [EmploymentInterface]
}
