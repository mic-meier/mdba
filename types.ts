export type Choice = {
  choice: 'A' | 'B'
  statement: string
  characteristic: 'O' | 'R' | 'D' | 'I'
}

export type ChoiceSet = {
  set: number
  choices: [Choice, Choice]
}

export type Questionnaire = ChoiceSet[]

export type IndexProps = {
  questionnaire: Questionnaire
}
