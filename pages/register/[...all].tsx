import React, { ReactElement } from 'react'
import HomeLayout from '@components/home-layout'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { AllQueryParamsType } from '../../src/types/common'
import RegistrationLayout from '@components/registration-layout'
const RegisterView = dynamic(
  // @ts-ignore
  () => import('@screens/register/register-view').then((mod) => mod.RegisterView),
  { ssr: false }
)

export type QueryParamsType = {
  all: AllQueryParamsType
}
const RegistrationPage = (): ReactElement => {
  const router = useRouter()
  const { all = [] } = (router.query as QueryParamsType) || {}

  return (
    <RegistrationLayout title="Register">
      <RegisterView allQueryParams={all} />
    </RegistrationLayout>
  )
}

export default RegistrationPage
