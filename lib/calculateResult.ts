import { FormState } from '../types'

export interface AnalysisResult {
  x: number
  y: number
}

export function calculateAnalysisResult(data: FormState): AnalysisResult {
  const returnResult = {
    x: 0,
    y: 0,
  }
  const distribution = {
    R: 0,
    O: 0,
    D: 0,
    I: 0,
  }

  for (const choice in data) {
    const answerSet = data[choice]

    let a: keyof typeof answerSet

    for (a in answerSet) {
      const answer = answerSet[a]
      if (answer.characteristic === 'R') {
        distribution.R += answer.value
      }
      if (answer.characteristic === 'O') {
        distribution.O += answer.value
      }
      if (answer.characteristic === 'D') {
        distribution.D += answer.value
      }
      if (answer.characteristic === 'I') {
        distribution.I += answer.value
      }
    }
  }
  if (distribution.R > distribution.I) {
    returnResult.y += distribution.R
  } else if (distribution.R < distribution.I) {
    returnResult.y -= distribution.I
  }
  if (distribution.D > distribution.I) {
    returnResult.x += distribution.D
  } else if (distribution.D < distribution.I) {
    returnResult.x -= distribution.I
  }
  return returnResult
}
