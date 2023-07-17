import React from 'react'
import ReactDOM from 'react-dom/client'

import Router from './Router'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import store from './store'
import { Provider } from 'react-redux'

import './styles/index.scss'
import './styles/normalize.css'

import config from './config'
const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: 'projectx-87e81.firebaseapp.com',
  projectId: 'projectx-87e81',
  storageBucket: 'projectx-87e81.appspot.com',
  messagingSenderId: '434326078448',
  appId: '1:434326078448:web:198113d961765f69f35335',
  measurementId: 'G-KPDHD6VMW4'
}

export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
)
