import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

import { AnalysisResult, calculateAnalysisResult } from '../lib/calculateResult'
import { Characteristic, FormState, Questionnaire } from '../types'
import FormFieldSet from './FormFieldSet'

interface Props {
  questionnaire: Questionnaire
  setIsFormSubmitted: Dispatch<SetStateAction<boolean>>
  submitResult: Dispatch<SetStateAction<AnalysisResult>>
  resultState: AnalysisResult
}

interface Result {
  value: number
  characteristic: Characteristic
}

export default function QuestionnaireForm({
  questionnaire,
  setIsFormSubmitted,
  submitResult,
}: Props) {
  const [formState, setFormState] = useState<FormState>({})
  const isFormValid = Object.keys(formState).length === 18

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    const analysisResult = calculateAnalysisResult(formState)
    console.log(`analysisResult`, analysisResult)
    submitResult((resultState) => {
      return { ...resultState, ...analysisResult }
    })
    setIsFormSubmitted(true)
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
