export type Question = {
  choice: string
  statement: string
}

export type QuestionSet = {
  set: number
  choices: Question[]
}

export type Questionnaire = QuestionSet[]
