import React, { FC, FormEvent, useState } from 'react'
import {
  FormStepsControlButtons,
  gotoStep,
} from '@screens/register/components/form-control-buttons'
import { StepProps } from '../../../types/common'
import { updateRegistrationData } from '@utils/cache-data-util'
import { useApolloClient } from '@apollo/client'

export const FullNameFormStep: FC<StepProps> = (props) => {
  const {
    registrationId,
    currentPage,
    registrationData: { fullName: regFullName },
  } = props

  const [fullName, setFullName] = useState(regFullName || '')
  const client = useApolloClient()
  const nextPage: number = currentPage + 1
  const _handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const result = updateRegistrationData(registrationId, { fullName }, client);
    if(result){
      gotoStep(nextPage, registrationId)
    }
    // go home
  }

  return (
    <div>
      <form id={'full-name-step-form'} onSubmit={_handleSubmit}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="name"
            id="name"
            required
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
            placeholder="Oka Moritz"
          />
        </div>
      </form>
      <FormStepsControlButtons formName={'full-name-step-form'} {...props} />
    </div>
  )
}
