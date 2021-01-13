import React, { FC } from 'react'
import { router } from 'next/client'
import { routeStep, totalStepNo } from '@utils/common'
import BaseButton from '@components/BaseButton'

export type StepProps = {
  registrationId: string
  currentPage: number
  formName: string
}

export const gotoStep = (step: number, registrationId: string): void => {
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
    <span className="relative z-0 mt-8 inline-flex justify-end sm:justify-start">
      {previousPage >= 0 && (
        <button
          type="button"
          style={{
            filter:
              'drop-shadow(rgba(0, 0, 0, 0.09) 0px 0px 2px) drop-shadow(rgba(0, 0, 0, 0.12) 0px 1px 2px)',
          }}
          className="mr-4 relative inline-flex items-center px-4 py-4 rounded-full border-none bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none"
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

      <BaseButton type="submit" form={formName}>
        {nextPage > totalStepNo ? (
          'Submit'
        ) : (
          <div className={'w-full justify-between inline-flex items-center min-w-button pl-1  '}>
            <span style={{ fontSize: '1rem' }}>Next</span>
            <svg
              strokeWidth="2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        )}
      </BaseButton>
    </span>
  )
}
