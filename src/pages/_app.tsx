import React, { useEffect } from 'react' // Add this import

import '@/styles/globals.css'
import '@/styles/navbar.scss'
import '@/styles/home.scss'

import { Provider } from 'react-redux'
import store, { toggleMobile } from '@/store'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const initialSetup = (): void => {
      const isMobile = window.innerWidth <= 600
      if (isMobile) {
        store.dispatch(toggleMobile()) // Dispatch the toggleMobile action to set the initial device state
      }
    }

    initialSetup() // Call it initially
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
