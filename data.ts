import { channel } from 'diagnostic_channel'

import { Questionnaire } from './types'

export const questionnaire: Questionnaire = [
  {
    set: 1,
    choices: [
      {
        choice: 'A',
        statement:
          'Ich bin offen genug, um auf Menschen zuzugehen und persönliche Beziehungen\
           zu ihnen aufzubauben.',
        characteristic: 'O',
      },
      {
        choice: 'B',
        statement:
          'Ich bin nicht offen genug, um auf Menschen zuzugehen und persönliche\
           Beziehungen zu ihnen aufzubauen.',
        characteristic: 'R',
      },
    ],
  },
  {
    set: 2,
    choices: [
      {
        choice: 'A',
        statement: 'Ich reagiere langsam und bedächtig.',
        characteristic: 'I',
      },
      {
        choice: 'B',
        statement: 'Ich reagiere schnell und spontan.',
        characteristic: 'D',
      },
    ],
  },
  {
    set: 3,
    choices: [
      {
        choice: 'A',
        statement:
          'Ich achte darauf, nicht zu viel Zeit ungeplant mit anderen zu verbringen.',
        characteristic: 'R',
      },
      {
        choice: 'B',
        statement: 'Es macht mir nichts aus, meine Zeit anderen zu widmen.',
        characteristic: 'O',
      },
    ],
  },
  {
    set: 4,
    choices: [
      {
        choice: 'A',
        statement:
          'Bei gesellschaftlichen Anlässen stelle ich mich meist selbst vor.',
        characteristic: 'D',
      },
      {
        choice: 'B',
        statement:
          'Bei gesellschaftlichen Anlässen warte ich, bis sich andere mir vorstellen.',
        characteristic: 'I',
      },
    ],
  },
  {
    set: 5,
    choices: [
      {
        choice: 'A',
        statement:
          'Ich konzentriere mich in Gesprächen auf die Interessen meiner Gesprächspartner, \
          auch wenn das bedeutet, dass wir vom Thema abkommen.',
        characteristic: 'O',
      },
      {
        choice: 'B',
        statement:
          'Ich konzentriere mich in Gesprächen auf die anstehenden Probleme, Themen\
           oder geschäftliche Angelegenheiten.',
        characteristic: 'R',
      },
    ],
  },
  {
    set: 6,
    choices: [
      {
        choice: 'A',
        statement: 'Ich habe kein bestimmendes Wesen und bin geduldig.',
        characteristic: 'I',
      },
      {
        choice: 'B',
        statement: 'Ich habe ein bestimmendes Wesen und bin oft ungeduldig.',
        characteristic: 'D',
      },
    ],
  },
  {
    set: 7,
    choices: [
      {
        choice: 'A',
        statement:
          'Die Entscheidungen, die ich treffe, basieren in der Regel auf Daten und Fakten.',
        characteristic: 'R',
      },
      {
        choice: 'B',
        statement:
          'Ich treffe meine Entscheidungen meist auf der Basis von Gefühlen, Erfahrungen \
            oder Beziehungen.',
        characteristic: 'O',
      },
    ],
  },
  {
    set: 8,
    choices: [
      {
        choice: 'A',
        statement: 'Ich trage viel zum Gespräch in der Gruppe bei.',
        characteristic: 'D',
      },
      {
        choice: 'B',
        statement: 'Ich trage wenig zum Gespräch in der Gruppe bei.',
        characteristic: 'I',
      },
    ],
  },
  {
    set: 9,
    choices: [
      {
        choice: 'A',
        statement:
          'Wenn ich die Wahl habe, arbeite ich lieber mit anderen zusammen und wir \
        unterstützen uns gegenseitig.',
        characteristic: 'O',
      },
      {
        choice: 'B',
        statement:
          'Ich arbeite lieber alleine und wenn das nicht möglich ist, bestimme ich \
          zumindest die Bedingungen für die Zusammenarbeit mit den anderen.',
        characteristic: 'R',
      },
    ],
  },
  {
    set: 10,
    choices: [
      {
        choice: 'A',
        statement:
          'Ich stelle viele Fragen und drücke mich vorsichtig und indirekt aus.',
        characteristic: 'I',
      },
      {
        choice: 'B',
        statement:
          'Ich verleihe meiner Meinung in der Regel klar und deutlich Ausdruck.',
        characteristic: 'D',
      },
    ],
  },
  {
    set: 11,
    choices: [
      {
        choice: 'A',
        statement: 'Ich konzentriere mich auf Ideen, Konzepte oder Ergebnisse.',
        characteristic: 'R',
      },
      {
        choice: 'B',
        statement:
          'Ich konzentriere mich auf Personen, Interaktionen und Gefühle.',
        characteristic: 'O',
      },
    ],
  },
  {
    set: 12,
    choices: [
      {
        choice: 'A',
        statement:
          'Im Gespräch setze ich die Mittel der Gestik, Mimik und Intonation ständig ein.',
        characteristic: 'D',
      },
      {
        choice: 'B',
        statement:
          'Im Gespräch gehe ich sparsam mit den Mitteln der Gestik, Mimik und Intonation um.',
        characteristic: 'I',
      },
    ],
  },
  {
    set: 13,
    choices: [
      {
        choice: 'A',
        statement:
          'Es fällt mir leicht, unterschiedliche Meinungen (Ideen, Gefühle oder Einwände) \
          zu akzeptieren',
        characteristic: 'O',
      },
      {
        choice: 'B',
        statement:
          'Es fällt mir schwer, unterschiedliche Meinungen (Ideen, Gefühle oder Einwände) \
        zu akzeptieren',
        characteristic: 'R',
      },
    ],
  },
  {
    set: 14,
    choices: [
      {
        choice: 'A',
        statement:
          'Ich reagiere auf Risiken und Veränderungen vorsichtig und vorhersagbar.',
        characteristic: 'I',
      },
      {
        choice: 'B',
        statement:
          'Ich reagiere auf Risiken und Veränderungen flexibel und auf nicht \
        vorhersagbare Weise.',
        characteristic: 'D',
      },
    ],
  },
  {
    set: 15,
    choices: [
      {
        choice: 'A',
        statement:
          'Ich behalte meine Gefühle und Gedanken lieber für mich und spreche \
        nur darüber, wenn ich das auch wirklich will.',
        characteristic: 'R',
      },
      {
        choice: 'B',
        statement:
          'Ich finde es selbstverständlich, meine Gefühle zu äussern und darüber \
        zu sprechen.',
        characteristic: 'O',
      },
    ],
  },
  {
    set: 16,
    choices: [
      {
        choice: 'A',
        statement: 'Ich bin für neue Erfahrungen immer aufgeschlossen.',
        characteristic: 'D',
      },
      {
        choice: 'B',
        statement:
          'Ich ziehe bekannte Situationen und gewohnte Beziehungen vor.',
        characteristic: 'I',
      },
    ],
  },
  {
    set: 17,
    choices: [
      {
        choice: 'A',
        statement:
          'Ich nehme auf die Pläne, Interessen und Belange anderer Rücksicht.',
        characteristic: 'O',
      },
      {
        choice: 'B',
        statement:
          'Meine Pläne, Interessen und Belange haben in der Regel Vorrang.',
        characteristic: 'R',
      },
    ],
  },
  {
    set: 18,
    choices: [
      {
        choice: 'A',
        statement: 'Ich reagiere auf Konflikte langsam und sehr überlegt.',
        characteristic: 'I',
      },
      {
        choice: 'B',
        statement: 'Ich reagiere auf Konflikte schnell und direkt.',
        characteristic: 'D',
      },
    ],
  },
]
