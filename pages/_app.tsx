import React from 'react'
import { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { useApollo } from '@clients/apollo'
import 'nprogress/nprogress.css'
import '../styles/index.css'
import dynamic from 'next/dynamic'

const TopProgressBar = dynamic(
  () => {
    return import('@components/top-bar-progress-bar')
  },
  { ssr: false }
)
function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient: ApolloClient<any> | null = useApollo(pageProps)

  if (!apolloClient) {
    return <></>
  }

  return (
    <ApolloProvider client={apolloClient}>
      <TopProgressBar />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
