import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

import { calculateResult } from '../lib/calculateResult'
import { Questionnaire } from '../types'
import FormFieldSet from './FormFieldSet'

type Props = {
  questionnaire: Questionnaire
  setIsFormSubmitted: Dispatch<SetStateAction<boolean>>
  submitResult: Dispatch<SetStateAction<never[]>>
}

type Result = {
  value: number
  characteristic: 'O' | 'I' | 'R' | 'D'
}

export default function QuestionnaireForm({
  questionnaire,
  setIsFormSubmitted,
  submitResult,
}: Props) {
  const [formState, setFormState] = useState({})
  const isFormValid = Object.keys(formState).length === 18

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState({})
    setIsFormSubmitted(true)
    submitResult(calculateResult(formState))
  }

  function handleChange(set: number, valueA: Result, valueB: Result) {
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
      <button
        disabled={!isFormValid}
        type="submit"
        className={`py-1 px-2 rounded-md text-white font-semibold uppercase ${
          isFormValid ? 'bg-green-500' : 'bg-purple-700 '
        }`}
      >
        Submit
      </button>
    </form>
  )
}
