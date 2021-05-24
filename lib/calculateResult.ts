// const data = {
//   1: {
//     valueA: { characteristic: 'O', value: 2 },
//     valueB: { characteristic: 'R', value: 1 },
//   },
//   2: {
//     valueA: { characteristic: 'I', value: 3 },
//     valueB: { characteristic: 'D', value: 0 },
//   },
//   3: {
//     valueA: { characteristic: 'R', value: 0 },
//     valueB: { characteristic: 'O', value: 3 },
//   },
//   4: {
//     valueA: { characteristic: 'D', value: 1 },
//     valueB: { characteristic: 'I', value: 2 },
//   },
// }

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

//TODO: Add type for data

export function calculateResult(data: { [x: string]: { [x: string]: any } }) {
  for (const choice in data) {
    for (const result in data[choice]) {
      const answer = data[choice][result]
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
  return [returnResult]
}
