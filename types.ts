export type Choice = {
  choice: 'A' | 'B'
  statement: string
  characteristic: Characteristic
}

export type Characteristic = 'O' | 'R' | 'D' | 'I'

export type ChoiceSet = {
  set: number
  choices: [Choice, Choice]
}

export type Questionnaire = ChoiceSet[]

export type IndexProps = {
  questionnaire: Questionnaire
}

export type Answer = {
  value: number
  characteristic: Characteristic
}

export type AnswerSet = {
  valueA: Answer
  valueB: Answer
}

export type FormState = {
  [index: string]: AnswerSet
}
