import { Questionnaire } from './types'

export const questionnaire: Questionnaire = [
  {
    set: 1,
    choices: [
      {
        choice: 'A',
        statement:
          'Ich bin offen genug, um auf Menschen zuzugehen und persönliche Beziehungen zu ihnen aufzubauben.',
      },
      {
        choice: 'B',
        statement:
          'Ich bin nicht offen genug, um auf Menschen zuzugehen und persönliche Beziehungen zu ihnen aufzubauen',
      },
    ],
  },
  {
    set: 2,
    choices: [
      {
        choice: 'A',
        statement: 'Ich reagiere langsam und bedächtig.',
      },
      {
        choice: 'B',
        statement: 'Ich reagiere schnell und spontan.',
      },
    ],
  },
  {
    set: 3,
    choices: [
      {
        choice: 'A',
        statement:
          'Ich achte darauf, nicht zu viel Zeit ungeplant mit anderen zu verbringen',
      },
      {
        choice: 'B',
        statement: 'Es macht mir nichts aus, meine Zeit anderen zu widmen',
      },
    ],
  },
]
