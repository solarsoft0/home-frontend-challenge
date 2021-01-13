import React, { FC, FormEvent, useState } from 'react'
import {
  FormStepsControlButtons,
  gotoStep,
} from '@screens/register/components/form-control-buttons'
import { OptionType, StepProps } from '../../../types/common'
import { useApolloClient } from '@apollo/client'
import { updateRegistrationData } from '@utils/cache-data-util'
import { salaryOptions } from '@utils/common'
import FadeInTransition from '@components/FadeInTransition'

const salaryOptionsArray = Object.values(salaryOptions)

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
    if (!salary) return
    updateRegistrationData(registrationId, { salary }, client)
    gotoStep(nextPage, registrationId)
  }

  return (
    <FadeInTransition
      className={'flex-grow flex flex-col pb-10 md:pb-0 justify-between md:justify-start'}
    >
      <form id={'salary-step-form'} onSubmit={_handleSubmit} className={'md:h-1/2'}>
        <p className="mb-3 block text-sm font-light text-gray-700 pt-5 md:pt-0">Salary</p>
        <fieldset>
          <legend id="radiogroup-label" className="sr-only">
            Salary
          </legend>
          <div className="space-y-4" role="radiogroup" aria-labelledby="radiogroup-label">
            {salaryOptionsArray.map((option: OptionType, index: number) => {
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
          </div>
        </fieldset>
      </form>
      <FormStepsControlButtons formName={'salary-step-form'} {...props} />
    </FadeInTransition>
  )
}

// todo move to type

type SalarySelectOptionProps = {
  option: OptionType
  index: number
  isSelected: boolean
  setOption: React.Dispatch<React.SetStateAction<string>>
}

const SalarySelectOption: FC<SalarySelectOptionProps> = (props) => {
  const { index, option, setOption, isSelected } = props
  const { key, value } = option

  return (
    <FadeInTransition
      delay={0.2 * index}
      id={`radiogroup-option-${index}`}
      tabIndex={isSelected ? 0 : -1}
      role="radio"
      aria-checked={isSelected ? 'true' : 'false'}
      onClick={() => setOption(key)}
      onKeyPress={() => setOption(key)}
      className="group relative bg-white rounded-lg  cursor-pointer focus:outline-none   border-none w-full"
    >
      <div className="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 sm:flex sm:justify-between">
        <div className="flex text-sm font-light text-gray-700 items-center">{value}</div>
      </div>
      <div
        className={`${
          isSelected ? 'border-lemon' : 'border-transparent'
        } absolute inset-0 rounded-lg border-2 pointer-events-none`}
        aria-hidden="true"
      />
    </FadeInTransition>
  )
}
