import Layout from '@components/Layout'
import React, { ReactElement } from 'react'
import HomeScreen from '@screens/home/home-screen'

const IndexPage = (): ReactElement => {
  return (
    <Layout title="Home | Leave your Apartment in better Hands">
      <HomeScreen />
    </Layout>
  )
}

export default IndexPage
