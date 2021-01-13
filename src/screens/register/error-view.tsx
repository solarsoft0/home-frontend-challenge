import React, { FC } from 'react'
import BaseButton from '@components/base-button'
import { gotoStep } from '@screens/register/components/form-control-buttons'
import { router } from 'next/client'
import FadeInTransition from '@components/fade-in-transition'

export const ErrorView: FC = () => {
  return (
    <FadeInTransition className={'flex h-full justify-center items-center flex-col'}>
      <p className={'font-semibold text-darkgray'}>Oops! Content not found.</p>
      <div className={'flex items-center mt-3'}>
        <BaseButton
          className={'flex items-center mr-4'}
          type={'button'}
          onClick={() => router.reload()}
        >
          <div className={'inline-flex'}>
            <svg
              strokeWidth="2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className={'mr-2'}
            >
              <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                fill="currentColor"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            Retry
          </div>
        </BaseButton>
        <BaseButton className={'flex items-center'} type={'button'} onClick={() => gotoStep(-1)}>
          <div className={'inline-flex'}>
            <svg
              strokeWidth="2"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className={'mr-2'}
            >
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                fill="currentColor"
              />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            Cancel
          </div>
        </BaseButton>
      </div>
    </FadeInTransition>
  )
}
