import { Client, Provider, cacheExchange, fetchExchange } from 'urql'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const client = new Client({
  url: process.env.NEXT_PUBLIC_API_URL as string,
  exchanges: [cacheExchange, fetchExchange],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
