import { ChoiceSet } from '../types'

type FieldsetProps = {
  choiceSet: ChoiceSet
  formState: any // TODO: define type
  handleChange: any // TODO> define type
}

export default function FormFieldSet({
  choiceSet,
  formState,
  handleChange,
}: FieldsetProps) {
  const [choiceA, choiceB] = choiceSet.choices
  const { valueA } = formState[choiceSet.set]?.valueA || { valueA: 0 }
  const { valueB } = formState[choiceSet.set]?.valueB || { valueB: 0 }

  return (
    <fieldset
      className={`p-4 shadow-md rounded-md border-l-4 ${
        valueA + valueB === 3 ? 'border-green-500' : 'border-purple-700'
      }`}
    >
      <div className="p-2">
        <label htmlFor="choiceA" className="flex items-center space-x-4">
          <div className="">{`${choiceSet.set}${choiceA.choice}`}</div>
          <select
            name={`choice${choiceA.choice}`}
            id={`choice${choiceA.choice}`}
            onChange={(e) =>
              handleChange(
                choiceSet.set,
                {
                  valueA: parseInt(e.target.value),
                  characteristic: choiceSet.choices[0].characteristic,
                },
                {
                  valueB: 3 - parseInt(e.target.value),
                  characteristic: choiceSet.choices[1].characteristic,
                }
              )
            }
          >
            <option selected={valueA == 0} value={0}>
              0
            </option>
            <option selected={valueA === 1} value={1}>
              1
            </option>
            <option selected={valueA === 2} value={2}>
              2
            </option>
            <option selected={valueA === 3} value={3}>
              3
            </option>
          </select>
          <div>{`${choiceA.statement}`}</div>
        </label>
      </div>
      <div className="p-2">
        <label htmlFor="choiceB" className="flex items-center space-x-4">
          <div>{`${choiceSet.set}${choiceB.choice}`}</div>
          <select
            name={`choice${choiceB.choice}`}
            id={`choice${choiceB.choice}`}
            onChange={(e) =>
              handleChange(
                choiceSet.set,
                {
                  valueA: 3 - parseInt(e.target.value),
                  characteristic: choiceSet.choices[0].characteristic,
                },
                {
                  valueB: parseInt(e.target.value),
                  characteristic: choiceSet.choices[1].characteristic,
                }
              )
            }
          >
            <option selected={valueB === 0} value={0}>
              0
            </option>
            <option selected={valueB === 1} value={1}>
              1
            </option>
            <option selected={valueB === 2} value={2}>
              2
            </option>
            <option selected={valueB === 3} value={3}>
              3
            </option>
          </select>
          <div>{`${choiceB.statement}`}</div>
        </label>
      </div>
    </fieldset>
  )
}
