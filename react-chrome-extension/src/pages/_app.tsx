import '@/styles/globals.scss'
import '../styles/sidenav.scss'
import '../styles/profile.scss'
import type { AppProps } from 'next/app'
import {wrapper} from '../store/authStore';
import { Provider } from 'react-redux'

function App({ Component, pageProps, ...rest}: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    
  )
}

export default App;