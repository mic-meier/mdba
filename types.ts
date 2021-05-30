export type Choice = {
  choice: 'A' | 'B'
  statement: string
  characteristic: Characteristic
}

export type Characteristic = 'O' | 'R' | 'D' | 'I'

export interface ChoiceSet {
  set: number
  choices: [Choice, Choice]
}

export type Questionnaire = ChoiceSet[]

export type IndexProps = {
  questionnaire: Questionnaire
}

export interface Answer {
  value: number
  characteristic: Characteristic
}

export interface AnswerSet {
  valueA: Answer
  valueB: Answer
}

export interface FormState {
  [index: string]: AnswerSet
}

export interface BehaviourType {
  name: string
  underPressure: string
  is: string
  strivesFor: string
  habbyAbout: string
  wantsPraiseFor: string
  strength: string
  hates: string
  needs: string
  conserves: string
  needsForDecision: string
  needsToLearn: string
}
