import '@/styles/globals.scss'
import '../styles/sidenav.scss'
import '../styles/profile.scss'
import type { AppProps } from 'next/app'
import {wrapper} from '../store/authStore';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

function App({ Component, pageProps, ...rest}: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
    
  )
}

export default App;