import React, { FC, FormEvent } from 'react'
import { FormStepsControlButtons } from '@screens/register/components/form-control-buttons'
import { StepProps } from '../../../types/common'
import { salaryOptions } from '@utils/common'

export const SummaryFormStep: FC<StepProps> = (props) => {
  const { registrationData } = props

  const _handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // todo handle submit, send data to remote server
  }

  const { email, fullName, phoneNumber, salary } = registrationData

  return (
    <div className={'flex-grow flex flex-col pb-10 md:pb-0 justify-between md:justify-start'}>
      <form id={'summary-step-form'} onSubmit={_handleSubmit}>
        <div className=" py-5">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Summary</h3>
        </div>
        <div className="border-t border-gray-200 py-5 ">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-light text-gray-700">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900">{fullName}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-light text-gray-700">Phone Number</dt>
              <dd className="mt-1 text-sm text-gray-900">{phoneNumber}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-light text-gray-700">Email address</dt>
              <dd className="mt-1 text-sm text-gray-900">{email}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-light text-gray-700">Salary expectation</dt>
              <dd className="mt-1 text-sm text-gray-900">{salaryOptions[salary || ''].value}</dd>
            </div>
          </dl>
        </div>
      </form>
      <FormStepsControlButtons formName={'summary-step-form'} {...props} />
    </div>
  )
}
