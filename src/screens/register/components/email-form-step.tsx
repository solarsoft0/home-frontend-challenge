import React, { FC, FormEvent } from 'react'
import { FormStepsControlButtons, gotoStep } from '@screens/register/components/form-control-buttons'
import { StepProps } from '@screens/register/components/form-steps'


export const EmailFormStep: FC<StepProps> = (props) => {
  const { currentPage, registrationId } = props
  const nextPage: number = currentPage + 1
  const _handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    gotoStep(nextPage, registrationId)
  }

  return (
    <div>
      <form id={'email-step-form'} onSubmit={_handleSubmit}>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </div>
        <input
          type="text"
          name="email"
          id="email"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
        />
      </div>
    </form>
      <FormStepsControlButtons formName={'email-step-form'} {...props} />
    </div>

  )
}
