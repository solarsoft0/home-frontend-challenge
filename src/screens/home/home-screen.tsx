import React, { FC } from 'react'
import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/router'
import { initRegistration } from '@utils/cache-data-util'
import BaseButton from '@components/base-button'
import { routeStep } from '@utils/common'

const HomeScreen: FC = () => {
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
    <section className={'h-full flex flex-grow justify-center items-center flex-col'}>
      <h1 className={'text-3xl md:text-6xl font-bold leading-tight text-center text-darkgray'}>
        Leave your apartments.
        <span className={'block text-3xl md:text-6xl font-bold leading-tight text-center text-midgray'}>
          In better hands.
        </span>
      </h1>

      <p className={'text-md md:text-xl leading-relaxed text-center max-w-xl my-4 md:my-8 mx-auto text-lightgray'}>
        Home is the simplest, safest, and most profitable way to rent out your apartments.
      </p>
      <BaseButton type="button" onClick={handleSubmit}>
        Rent out with home
      </BaseButton>
    </section>
  )
}

export default HomeScreen
