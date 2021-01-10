import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from 'apollo-link-error'
import { CachePersistor } from 'apollo3-cache-persist'
import { appConfig } from '../../config'
import merge from 'deepmerge'
import isEqual from 'lodash.isequal'
import { useMemo } from 'react'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<any>

// todo: move to types
type KeyValueAny = { [key: string]: any }

export const createApolloClient = async (): Promise<ApolloClient<any>> => {
  const { apiHost, schemaVersion, schemaVersionKey } = appConfig

  const httpLink = new HttpLink({ uri: apiHost })

  const errorLink = onError(({ networkError }) => {
    // todo:improve global error handling
    console.log('networkError', networkError)
  })

  const link = ApolloLink.from([errorLink, httpLink] as any)

  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          inquiry: {
            merge(_, incoming) {
              return incoming
            },
          },
          inquiries: {
            merge(_, incoming) {
              return incoming
            },
          },
        },
      },
    },
  })

  // cache happens only on client side
  if (typeof window !== 'undefined') {
    const cachePersist = new CachePersistor({
      cache,
      storage: window.localStorage,
    })

    const currentVersion = window.localStorage.getItem(schemaVersionKey)

    if (currentVersion === schemaVersion) {
      await cachePersist.restore()
    } else {
      await cachePersist.purge()
      window.localStorage.setItem(schemaVersionKey, schemaVersion)
    }
  }
  return new ApolloClient({
    link,
    cache,
  })
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    // @ts-ignore
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s))),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(pageProps: KeyValueAny) {
  const state = pageProps[APOLLO_STATE_PROP_NAME]
  return useMemo(() => initializeApollo(state), [state])
}
