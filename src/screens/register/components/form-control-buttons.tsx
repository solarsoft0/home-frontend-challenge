import React, { FC } from 'react'
import { router } from 'next/client'
import { routeStep, totalStepNo } from '@utils/common'

export type StepProps = {
  registrationId: string
  currentPage: number
  formName: string
}

export const gotoStep = (step: number, registrationId: string) => {
  const route: string = routeStep[step]
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    router.push(`/register/${registrationId}/${route}`)
  }
}

export const FormStepsControlButtons: FC<StepProps> = (props) => {
  const { registrationId, currentPage, formName } = props
  const previousPage: number = currentPage - 1
  const nextPage: number = currentPage + 1

  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      {previousPage >= 0 && (
        <button
          type="button"
          className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          onClick={() => gotoStep(previousPage, registrationId)}
        >
          <span className="sr-only">Previous</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <button
        type="submit"
        className="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        form={formName}
      >
        <svg
          className="-ml-1 mr-2 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
        </svg>
        {nextPage > totalStepNo ? 'Submit' : 'Next'}
      </button>
    </span>
  )
}
