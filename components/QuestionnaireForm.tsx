import { useState } from 'react'

import { ChoiceSet, Questionnaire } from '../types'

type Props = {
  questionnaire: Questionnaire
}

type FieldsetProps = {
  choiceSet: ChoiceSet
  formState: any
  handleChange: any
}

function FormFieldSet({ choiceSet, formState, handleChange }: FieldsetProps) {
  const [choiceA, choiceB] = choiceSet.choices
  const { valueA, valueB } = formState[choiceSet.set] || {
    valueA: 0,
    valueB: 0,
  }

  return (
    <fieldset>
      <div>
        <label htmlFor="choiceA">
          {`${choiceSet.set}${choiceA.choice} ${choiceA.statement}`}
          <select
            name={`choice${choiceA.choice}`}
            id={`choice${choiceA.choice}`}
            onChange={(e) =>
              handleChange(
                choiceSet.set,
                parseInt(e.target.value),
                3 - parseInt(e.target.value)
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
        </label>
      </div>
      <div>
        <label htmlFor="choiceB">
          {`${choiceSet.set}${choiceB.choice} ${choiceB.statement}`}
          <select
            name={`choice${choiceB.choice}`}
            id={`choice${choiceB.choice}`}
            onChange={(e) =>
              handleChange(
                choiceSet.set,
                3 - parseInt(e.target.value),
                parseInt(e.target.value)
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
        </label>
      </div>
    </fieldset>
  )
}

export default function QuestionnaireForm({ questionnaire }: Props) {
  const [formState, setFormState] = useState({})

  function handleChange(set: number, valueA: number, valueB: number) {
    setFormState({
      ...formState,
      [set]: {
        valueA,
        valueB,
      },
    })
  }

  return (
    <form>
      {questionnaire.map((choiceSet) => (
        <FormFieldSet
          key={choiceSet.set}
          choiceSet={choiceSet}
          formState={formState}
          handleChange={handleChange}
        />
      ))}
    </form>
  )
}
