import React, { FC } from 'react'
import { useApolloClient } from '@apollo/client'
import { useRouter } from 'next/router'
import { initRegistration } from '@utils/cache-data-util'
import BaseButton from '@components/BaseButton'
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
    <section
      className={'flex flex-grow justify-center items-center flex-col '}
      style={{ height: 'calc(100vh - 112px)' }}
    >
      {/*<div className={'flex-grow relative '}>*/}
      {/*  <div className={'absolute top-0 h-full w-full flex justify-center'}>*/}
      {/*    <img className={'w-auto max-h-full'} src={'/hand.jpg'} alt={'hand'}/>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <h1 className={'text-6xl font-bold leading-tight text-center text-darkgray'}>
        Leave your apartments.
        <span className={'block text-6xl font-bold leading-tight text-center text-midgray'}>
          In better hands.
        </span>
      </h1>

      <p className={'text-xl leading-relaxed text-center max-w-xl my-8 mx-auto text-lightgray'}>
        Home is the simplest, safest, and most profitable way to rent out your apartments.
      </p>
      <BaseButton type="button" onClick={handleSubmit}>
        Rent out with home
      </BaseButton>
    </section>
  )
}

export default HomeScreen
