import React, { ReactElement } from 'react'
import Layout from '@components/Layout'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { AllQueryParamsType } from '@screens/register/register-screen'
const RegisterView = dynamic(
  // @ts-ignore
  () => import('@screens/register/register-screen').then((mod) => mod.RegisterView),
  { ssr: false }
)

export type QueryParamsType = {
  all: AllQueryParamsType
}
const RegistrationPage = (): ReactElement => {
  const router = useRouter()
  const { all = [] } = (router.query as QueryParamsType) || {}

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <RegisterView allQueryParams={all} />
    </Layout>
  )
}

export default RegistrationPage
