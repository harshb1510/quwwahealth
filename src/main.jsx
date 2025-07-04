import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'
import store from './store/store'
import config from './config/config'
import setupAxiosInterceptors from './utils/setupAxiosInterceptors'
import './index.css'
import App from './App.jsx'

// Initialize axios interceptors
setupAxiosInterceptors(store)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>,
)
