const data = {
  1: {
    valueA: { characteristic: 'O', value: 2 },
    valueB: { characteristic: 'R', value: 1 },
  },
  2: {
    valueA: { characteristic: 'I', value: 3 },
    valueB: { characteristic: 'D', value: 0 },
  },
  3: {
    valueA: { characteristic: 'R', value: 0 },
    valueB: { characteristic: 'O', value: 3 },
  },
  4: {
    valueA: { characteristic: 'D', value: 2 },
    valueB: { characteristic: 'I', value: 1 },
  },
}

const result = {
  x: 0,
  y: 0,
}

function calculateResult(data) {
  for (const choice in data) {
    for (const result in data[choice]) {
      const answer = data[choice][result]
      console.log(answer)
    }
  }
  return [result]
}

calculateResult(data)
