import '@/styles/globals.scss'
import '../styles/sidenav.scss'
import '../styles/profile.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
