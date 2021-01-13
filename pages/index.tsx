import HomeLayout from '@components/home-layout'
import React, { ReactElement } from 'react'
import HomeScreen from '@screens/home/home-screen'

const IndexPage = (): ReactElement => {
  return (
    <HomeLayout title="Home | Leave your Apartment in better Hands">
      <HomeScreen />
    </HomeLayout>
  )
}

export default IndexPage
