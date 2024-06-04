
export type ArticleItem = {
  id: string
  title: string
  date: string
  language: string
  codeLines: number
  modifiedAt?: string
  code: string
  description: string
  level: LevelType
}

export type LevelType = "beginner" | "intermediate" | "advanced" | "expert"
