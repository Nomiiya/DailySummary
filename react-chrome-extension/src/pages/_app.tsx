import '@/styles/globals.scss'
import '../styles/sidenav.scss'
import '../styles/profile.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '../../store/authStore'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);