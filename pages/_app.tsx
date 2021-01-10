import React from 'react'
import { AppProps } from 'next/app'
import '../styles/index.css'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@clients/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
