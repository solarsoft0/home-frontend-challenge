import React from 'react'
import { AppProps } from 'next/app'
import '../styles/index.css'
import { ApolloClient, ApolloProvider } from '@apollo/client'
import { useApollo } from '@clients/apollo'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient: ApolloClient<any> | null = useApollo(pageProps);

  if(!apolloClient) {
    return <></>
  }

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
