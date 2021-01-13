import React, { FC, FormEvent, useState } from 'react'
import {
  FormStepsControlButtons,
  gotoStep,
} from '@screens/register/components/form-control-buttons'
import { StepProps } from '../../../types/common'
import { useApolloClient } from '@apollo/client'
import { updateRegistrationData } from '@utils/cache-data-util'

// todo better validation and data serialization
export const PhoneNumberFormStep: FC<StepProps> = (props) => {
  const {
    registrationId,
    currentPage,
    registrationData: { phoneNumber: regPhoneNumber },
  } = props
  const [phoneNumber, setPhoneNumber] = useState(regPhoneNumber || '')
  const client = useApolloClient()
  const nextPage: number = currentPage + 1

  const _handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const result = updateRegistrationData(registrationId, { phoneNumber }, client)
    if (result) {
      gotoStep(nextPage, registrationId)
    }
  }

  return (
    <div className={'flex-grow flex flex-col pb-10 md:pb-0 justify-between md:justify-start'}>
      <form id={'phone-number-step-form'} onSubmit={_handleSubmit}>
        <label
          htmlFor="phone_number"
          className="block text-sm font-light text-gray-700 pt-5 md:pt-0"
        >
          Phone Number
        </label>
        <div className="my-3 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="focus:lemon focus:border-lemon h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              <option>EU</option>
            </select>
          </div>
          <input
            type="text"
            name="phone_number"
            id="phone_number"
            required
            value={phoneNumber}
            onChange={({ target }) => setPhoneNumber(target.value)}
            className=" shadow-md  pl-16 border-none block w-full sm:text-sm text-base text-gray-800  rounded-md w-full py-4 px-4"
            placeholder="+1 (555) 987-6543"
          />
        </div>
      </form>
      <FormStepsControlButtons formName={'phone-number-step-form'} {...props} />
    </div>
  )
}
