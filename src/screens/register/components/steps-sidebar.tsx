import React, { FC } from 'react'
import { totalStepNo } from '@utils/common'

type FormStepsProps = {
  currentStepIndex: number
}
export const StepsSidebar: FC<FormStepsProps> = (props) => {
  const { currentStepIndex } = props
  const percentage: string = `${(currentStepIndex * 100) / totalStepNo}%`
  const isSummaryPage: boolean = totalStepNo === currentStepIndex

  return (
    <nav aria-label="Sidebar">
      <div className="space-y-1">
        <div aria-current={isSummaryPage ? false : 'page'}>
          <div className="relative pt-1  mt-4">
            <div className="flex mb-2">
              <div className={'flex'}>
                <span
                  className={`text-xs font-semibold inline-block uppercase text-gray-600    ${
                    !isSummaryPage ? 'text-green-500 bold' : 'text-gray-400'
                  }`}
                >
                  Registration
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: percentage }}
                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-500 ${
                  isSummaryPage ? 'bg-green-500' : 'bg-gray-500'
                }`}
              />
            </div>
          </div>
        </div>

        <div
          className={`group flex items-center pr-3 py-2 text-sm font-medium rounded-md ${
            isSummaryPage ? 'text-green-500 bold' : 'text-gray-400'
          }`}
          aria-current={isSummaryPage ? 'page' : false}
        >
          <svg
            className={`mr-2 h-6 w-6 ${isSummaryPage ? 'text-green-500' : 'text-gray-400'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="truncate">Summary</span>
        </div>
      </div>
    </nav>
  )
}
