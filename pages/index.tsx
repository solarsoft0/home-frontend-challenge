import Layout from '@components/Layout'
import React, { ReactElement } from 'react'

const IndexPage = (): ReactElement => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <p className={'text-blue-600'}>
        Hello Next.js{' '}
        <span role="img" aria-label="wave hand emoji">
          👋
        </span>
      </p>
    </Layout>
  )
}

export default IndexPage
