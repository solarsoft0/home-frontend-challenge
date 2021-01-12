import React, { FC, FormEvent } from 'react'
import { FormStepsControlButtons, gotoStep } from '@screens/register/components/form-control-buttons'
import { StepProps } from '@screens/register/components/form-steps'



export const PhoneNumberFormStep: FC<StepProps> = (props) => {
  const { currentPage, registrationId } = props

  const nextPage: number = currentPage + 1
  const _handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    gotoStep(nextPage, registrationId)
  }

  return (
    <form id={'phone-number-step-form'} onSubmit={_handleSubmit}>
      <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <select
            id="country"
            name="country"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            <option>EU</option>
          </select>
        </div>
        <input
          type="text"
          name="phone_number"
          id="phone_number"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
          placeholder="+1 (555) 987-6543"
        />
      </div>
      <FormStepsControlButtons formName={'phone-number-step-form'} {...props} />
    </form>
  )
}
