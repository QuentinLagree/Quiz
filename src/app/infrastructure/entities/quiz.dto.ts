export interface Root {
    quizs: Quiz[]
  }
  
  export interface Quiz {
    id: number
    title: string
    themes: string[]
    author: string
    content: Content[]
    created_at: number
  }
  
  export interface Content {
    questions: string
    TrueFalse: boolean
    proposition?: string[]
    answer: any
  }
  