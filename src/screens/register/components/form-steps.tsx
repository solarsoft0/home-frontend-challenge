import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { FormStepsProps, RouteStepType } from '../../../types/common'
import { routeStep } from '@utils/common'

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

export const FormSteps: FC<FormStepsProps> = (props) => {
  const { currentStepIndex, registrationId , registrationData } = props

  switch (routeStep[currentStepIndex]) {
    case RouteStepType['full-name']:
      return <FullNameFormStep registrationId={registrationId} currentPage={currentStepIndex} registrationData={registrationData} />
    case RouteStepType['email']:
      return <EmailFormStep currentPage={currentStepIndex} registrationId={registrationId} registrationData={registrationData} />
    case RouteStepType['phone-number']:
      return <PhoneNumberFormStep currentPage={currentStepIndex} registrationId={registrationId} registrationData={registrationData} />
    case RouteStepType['salary']:
      return <SalaryFormStep currentPage={currentStepIndex} registrationId={registrationId} registrationData={registrationData} />
    case RouteStepType['summary']:
      return <SummaryFormStep currentPage={currentStepIndex} registrationId={registrationId} registrationData={registrationData} />
    default:
      return <>error</>
  }
}
