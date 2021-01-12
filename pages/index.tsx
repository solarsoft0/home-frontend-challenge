import Layout from '@components/Layout'
import Link from 'next/link'
import React, { ReactElement } from 'react'

const IndexPage = (): ReactElement => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <p className={'text-blue-600'}>
        Hello Next.js{' '}
        <span role="img" aria-label="hand wave emoji">
          👋
        </span>
        <Link href="/inquiry/ejjdnakdkasnkndknadad/step-1">About</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
