import Layout from '@components/Layout'
import React, { ReactElement } from 'react'
import { useApolloClient } from '@apollo/client'
import { initRegistration } from '@utils/cache-data-util'
import { routeStep } from '@utils/common'
import { useRouter } from 'next/router'

const IndexPage = (): ReactElement => {
  const client = useApolloClient()
  const router = useRouter()

  const handleSubmit = (): void => {
    const {
      registrationData: { id },
    } = initRegistration(client)
    const route: string = routeStep[0]
    router.push(`/register/${id}/${route}`)
  }
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <p className={'text-blue-600'}>
        Hello Next.js{' '}
        <span role="img" aria-label="hand wave emoji">
          👋
        </span>
        <button onClick={handleSubmit}>hello click me</button>
      </p>
    </Layout>
  )
}

export default IndexPage
