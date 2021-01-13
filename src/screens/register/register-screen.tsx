import React, { FC } from 'react'
import { router } from 'next/client'
import { FormSteps } from '@screens/register/components/form-steps'
import { StepsSidebar } from '@screens/register/components/steps-sidebar'
import { RegisterViewProps } from '../../types/common'
import { getRegistrationData } from '@utils/cache-data-util'
import { useApolloClient } from '@apollo/client'
import { routeStep } from '@utils/common'

export const RegisterView: FC<RegisterViewProps> = (props) => {
  const {
    allQueryParams: [registrationId, step, ...restProps],
  } = props

  const client = useApolloClient()

  // if SSG return empty (SSG doesnt make path params available)
  // its good we can SSG base UI on build time, and render the rest on client side
  if (registrationId === undefined) {
    return <></>
  }

  let currentStepIndex = -1
  if (step) {
    currentStepIndex = routeStep.indexOf(step)
  }
  // if step not provided or step doesnt exist, or more props are passed
  if (currentStepIndex < 0 || !!restProps.length) {
    router.push('/')
    return <></>
  }

  const registrationData = getRegistrationData(registrationId, client)

  if (!registrationData) {
    return <div className={'flex'}>goto home or try again</div>
  }
  return (
    <div className={'flex'} style={{ height: 'calc(100vh - 112px)' }}>
      <StepsSidebar currentStepIndex={currentStepIndex} />
      <FormSteps
        registrationId={registrationId}
        currentStepIndex={currentStepIndex}
        registrationData={registrationData}
      />
    </div>
  )
}
