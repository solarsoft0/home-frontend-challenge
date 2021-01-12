import React, { FC } from 'react'
import { router } from 'next/client'
import { FormSteps } from '@screens/register/components/form-steps'
import { StepsSidebar } from '@screens/register/components/steps-sidebar'
export type AllQueryParamsType = [registrationId: string, step: RouteStepType]

export enum RouteStepType {
  'full-name' = 'full-name',
  'email' = 'email',
  'phone-number' = 'phone-number',
  'salary' = 'salary',
  'summary' = 'summary',
}

export const routeStep: string[] = Object.values(RouteStepType)

export const totalStepNo: number = routeStep.indexOf('summary')


type RegisterViewProps = {
  allQueryParams: AllQueryParamsType | []
}
export const RegisterView: FC<RegisterViewProps> = (props) => {
  const {
    allQueryParams: [registrationId, step, ...restProps],
  } = props

  // if SSG return empty (SSG doesnt make path params available)
  // its good we can SSG base UI on build time, and render the rest on client side
  if (registrationId === undefined) {
    return <></>
  }

  let currentStepIndex: number = -1
  if (step) {
    currentStepIndex = routeStep.indexOf(step)
  }
  // if step not provided or step doesnt exist, or more props are passed
  if (currentStepIndex < 0 || !!restProps.length) {
    router.push('/')
    return <></>
  }

  // todo try get inquiries/registration

  return (
    <div className={'flex'}>
      <StepsSidebar currentStepIndex={currentStepIndex} />
      <FormSteps registrationId={registrationId} currentStepIndex={currentStepIndex} />
    </div>
  )
}
