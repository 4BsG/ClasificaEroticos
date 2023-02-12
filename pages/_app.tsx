import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavFooterLayout from '../components/Layouts/NavFooter/NavFooter'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavFooterLayout>
      <Component {...pageProps} />
    </NavFooterLayout>
  )
}

export default MyApp
