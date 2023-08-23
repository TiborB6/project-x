import React, { useEffect } from 'react' // Add this import

import '@/styles/globals.css'
import '@/styles/normalize.css'
import '@/styles/navbar.scss'
import '@/styles/home.scss'
import '@/styles/footer.scss'
import '@/styles/profile.scss'
import '@/styles/form.scss'
import '@/styles/legal.scss'
import '@/styles/contact.scss'
import '@/styles/b2b.scss'
import '@/styles/store.scss'
import '@/styles/cart.scss'

import { Provider } from 'react-redux'
import { toggleMobile } from '../redux/deviceSlice'
import store from '../redux/store'
import type { AppProps } from 'next/app'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const initialSetup = (): void => {
      const isMobile = window.innerWidth <= 720
      if (isMobile) {
        store.dispatch(toggleMobile()) // Dispatch the toggleMobile action to set the initial device state
      }
    }

    initialSetup() // Call it initially

    const handleWindowResize = (): void => {
      const state = store.getState()

      if (window.innerWidth <= 720) {
        if (state.device !== 'mobile') {
          store.dispatch(toggleMobile())
        }
      } else {
        if (state.device !== 'desktop') {
          store.dispatch(toggleMobile())
        }
      }
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleWindowResize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
