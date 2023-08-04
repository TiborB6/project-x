// Import necessary dependencies
import React from 'react'
import ReactDOM from 'react-dom/client' // Note: This might cause issues in the future as ReactDOM.createRoot() should be used instead

// Import the main Router component
import Router from './Router'

// Import Firebase SDK modules
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Import the Redux store and Provider
import store from './store'
import { Provider } from 'react-redux'

// Import custom styling
import './styles/index.scss'
import './styles/normalize.css'

// Import Firebase configuration
import API_KEY from './config'
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'projectx-87e81.firebaseapp.com',
  projectId: 'projectx-87e81',
  storageBucket: 'projectx-87e81.appspot.com',
  messagingSenderId: '434326078448',
  appId: '1:434326078448:web:198113d961765f69f35335',
  measurementId: 'G-KPDHD6VMW4'
}

// Initialize Firebase app and analytics
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)

// Get the root element where the React app will be rendered
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement // Note: ReactDOM.createRoot() should be used instead
)

// Render the main app wrapped in React.StrictMode and Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
)
