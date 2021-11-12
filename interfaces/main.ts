interface Content {
  content: string
  id: number
}

export interface MainContentItems {
  sectionItems: { [key: string]: Content }
}
