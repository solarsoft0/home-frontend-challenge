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
    const result = updateRegistrationData(registrationId, { fullName }, client)
    if (result) {
      gotoStep(nextPage, registrationId)
    }
    // go home
  }

  return (
    <div className={'flex-grow flex flex-col pb-10 md:pb-0 justify-between md:justify-start'}>
      <form id={'full-name-step-form'} onSubmit={_handleSubmit}>
        <label htmlFor="name" className="block text-sm font-light text-gray-700 pt-5 md:pt-0">
          Full Name
        </label>
        <div className="my-3 relative rounded-md shadow-sm">
          <input
            type="text"
            name="name"
            id="name"
            required
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
            className=" shadow-md  border-none block w-full sm:text-sm text-base text-gray-800  rounded-md w-full py-4 px-4"
            placeholder="Oka Moritz"
          />
        </div>
      </form>
      <FormStepsControlButtons formName={'full-name-step-form'} {...props} />
    </div>
  )
}
