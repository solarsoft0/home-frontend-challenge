import React, { FC, FormEvent, useState } from 'react'
import {
  FormStepsControlButtons,
  gotoStep,
} from '@screens/register/components/form-control-buttons'
import { StepProps } from '../../../types/common'
import { useApolloClient } from '@apollo/client'
import { updateRegistrationData } from '@utils/cache-data-util'

type OptionType = { [key: string]: string }

const options: OptionType[] = [
  {
    key: 'BETWEEN_0_TO_1',
    value: '0 - 1.000',
  },
  {
    key: 'BETWEEN_1_TO_2',
    value: '1.000 - 2.000',
  },
  {
    key: 'BETWEEN_2_TO_3',
    value: '2.000 - 3.000',
  },
  {
    key: 'BETWEEN_3_TO_4',
    value: '3.000 - 4.000',
  },
  {
    key: 'MORE_THAN_4',
    value: 'More than 4.000',
  },
]

export const SalaryFormStep: FC<StepProps> = (props) => {
  const {
    currentPage,
    registrationId,
    registrationData: { salary: regSalary },
  } = props
  const [salary, setSalary] = useState(regSalary || '')
  const client = useApolloClient()
  const nextPage: number = currentPage + 1

  const _handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const result = updateRegistrationData(registrationId, { salary }, client)
    if (result) {
      gotoStep(nextPage, registrationId)
    }
  }

  return (
    <form id={'salary-step-form'} onSubmit={_handleSubmit}>
      <fieldset>
        <legend id="radiogroup-label" className="sr-only">
          Server size
        </legend>
        <ul className="space-y-4" role="radiogroup" aria-labelledby="radiogroup-label">
          {options.map((option: OptionType, index: number) => {
            return (
              <SalarySelectOption
                key={index}
                index={index}
                isSelected={option.key === salary}
                option={option}
                setOption={setSalary}
              />
            )
          })}
        </ul>
      </fieldset>
      <FormStepsControlButtons formName={'salary-step-form'} {...props} />
    </form>
  )
}

// todo move to type

type SalarySelectOptionProps = {
  option: OptionType
  index: number
  isSelected: boolean
  setOption: React.Dispatch<any>
}

const SalarySelectOption: FC<SalarySelectOptionProps> = (props) => {
  const { index, option, setOption, isSelected } = props
  const { key, value } = option

  return (
    <li
      id={`radiogroup-option-${index}`}
      tabIndex={isSelected ? 0 : -1}
      role="radio"
      aria-checked={isSelected ? 'true' : 'false'}
      onClick={() => setOption(key)}
      className="group relative bg-white rounded-lg shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
        <div className="flex items-center">{value}</div>
      </div>
      <div
        className={`${
          isSelected ? 'border-indigo-500' : 'border-transparent'
        } absolute inset-0 rounded-lg border-2 pointer-events-none`}
        aria-hidden="true"
      />
    </li>
  )
}
