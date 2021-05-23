import { ChangeEvent, ReactNode, useState } from 'react'

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
    <fieldset className="p-4 shadow-md rounded-md">
      <div className="p-2">
        <label htmlFor="choiceA" className="flex items-center space-x-4">
          <div className="">{`${choiceSet.set}${choiceA.choice}`}</div>
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
          <div>{`${choiceB.statement}`}</div>
        </label>
      </div>
    </fieldset>
  )
}

export default function QuestionnaireForm({ questionnaire }: Props) {
  const [formState, setFormState] = useState({})
  const isFormValid = Object.keys(formState).length === 18

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(formState)
  }

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
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
      {questionnaire.map((choiceSet) => (
        <FormFieldSet
          key={choiceSet.set}
          choiceSet={choiceSet}
          formState={formState}
          handleChange={handleChange}
        />
      ))}
      <button disabled={!isFormValid} type="submit">
        Submit
      </button>
    </form>
  )
}
