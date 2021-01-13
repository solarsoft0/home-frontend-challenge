import React, { FC, FormEvent, useState } from 'react'
import {
  FormStepsControlButtons,
  gotoStep,
} from '@screens/register/components/form-control-buttons'
import { StepProps } from '../../../types/common'
import { useApolloClient } from '@apollo/client'
import { updateRegistrationData } from '@utils/cache-data-util'
import FadeInTransition from '@components/fade-in-transition'

export const EmailFormStep: FC<StepProps> = (props) => {
  const {
    registrationId,
    currentPage,
    registrationData: { email: regEmail },
  } = props
  const [email, setEmail] = useState(regEmail || '')
  const client = useApolloClient()
  const nextPage: number = currentPage + 1

  const _handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    updateRegistrationData(registrationId, { email }, client)
    gotoStep(nextPage, registrationId)
  }

  return (
    <FadeInTransition className={'flex-grow flex flex-col justify-between md:justify-start'}>
      <form id={'email-step-form'} onSubmit={_handleSubmit}>
        <label htmlFor="email" className="block text-sm font-light text-gray-700 pt-5 md:pt-0">
          Email
        </label>
        <div className="my-3 relative rounded-md shadow-sm">
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
            required
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            className="pl-10 shadow-md  border-none block w-full sm:text-sm text-base text-gray-800  rounded-md w-full py-4 px-4"
            placeholder="you@example.com"
            title="Please provide a valid email"
          />
        </div>
      </form>
      <FormStepsControlButtons formName={'email-step-form'} {...props} />
    </FadeInTransition>
  )
}
