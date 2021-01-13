import React, { FC, FormEvent } from 'react'
import {
  FormStepsControlButtons,
} from '@screens/register/components/form-control-buttons'
import { StepProps } from '../../../types/common'

export const SummaryFormStep: FC<StepProps> = (props) => {
  const { registrationData } = props

  const _handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // todo handle submit, send data to remote server
  }

  return (
    <form id={'summary-step-form'} onSubmit={_handleSubmit}>
      <div className="mt-1 relative">
        Summary
        {JSON.stringify(registrationData)}
      </div>
      <FormStepsControlButtons formName={'summary-step-form'} {...props} />
    </form>
  )
}
