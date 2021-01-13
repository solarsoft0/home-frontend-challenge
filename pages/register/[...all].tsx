import React, { ReactElement } from 'react'
import Layout from '@components/Layout'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { AllQueryParamsType } from '../../src/types/common'
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
    <Layout title="Register">
      <RegisterView allQueryParams={all} />
    </Layout>
  )
}

export default RegistrationPage
