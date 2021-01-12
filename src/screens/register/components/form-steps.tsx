import React, { FC } from 'react'
import { routeStep, RouteStepType } from '@screens/register/register-screen'
import dynamic from 'next/dynamic'

const FullNameFormStep = dynamic(
  // @ts-ignore
  () =>
    import('@screens/register/components/full-name-form-step').then((mod) => mod.FullNameFormStep),
  { ssr: false }
)
const SalaryFormStep = dynamic(
  // @ts-ignore
  () => import('@screens/register/components/salary-form-step').then((mod) => mod.SalaryFormStep),
  { ssr: false }
)
const EmailFormStep = dynamic(
  // @ts-ignore
  () => import('@screens/register/components/email-form-step').then((mod) => mod.EmailFormStep),
  { ssr: false }
)

const PhoneNumberFormStep = dynamic(
  // @ts-ignore
  () =>
    import('@screens/register/components/phone-number-form-step').then(
      (mod) => mod.PhoneNumberFormStep
    ),
  { ssr: false }
)

const SummaryFormStep = dynamic(
  // @ts-ignore
  () => import('@screens/register/components/summary-form-step').then((mod) => mod.SummaryFormStep),
  { ssr: false }
)

type FormStepsProps = {
  currentStepIndex: number
  registrationId: string
}
export type StepProps = {
  currentPage: number
  registrationId: string
}

export const FormSteps: FC<FormStepsProps> = (props) => {
  const { currentStepIndex, registrationId } = props

  switch (routeStep[currentStepIndex]) {
    case RouteStepType['full-name']:
      return <FullNameFormStep registrationId={registrationId} currentPage={currentStepIndex} />
    case RouteStepType['email']:
      return <EmailFormStep currentPage={currentStepIndex} registrationId={registrationId} />
    case RouteStepType['phone-number']:
      return <PhoneNumberFormStep currentPage={currentStepIndex} registrationId={registrationId} />
    case RouteStepType['salary']:
      return <SalaryFormStep currentPage={currentStepIndex} registrationId={registrationId} />
    case RouteStepType['summary']:
      return <SummaryFormStep currentPage={currentStepIndex} registrationId={registrationId} />
    default:
      return <>error</>
  }
}
