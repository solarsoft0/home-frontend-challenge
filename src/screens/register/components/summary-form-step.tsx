import React, { FC, FormEvent } from 'react'
import {
  FormStepsControlButtons,
  gotoStep,
} from '@screens/register/components/form-control-buttons'
import { StepProps } from '@screens/register/components/form-steps'

export const SummaryFormStep: FC<StepProps> = (props) => {
  const { currentPage, registrationId } = props

  const nextPage: number = currentPage + 1
  const _handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    gotoStep(nextPage, registrationId)
  }

  return (
    <form id={'summary-step-form'} onSubmit={_handleSubmit}>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Summary
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="name"
          id="name"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="Oka Moritz"
        />
      </div>
      <FormStepsControlButtons formName={'summary-step-form'} {...props} />
    </form>
  )
}
