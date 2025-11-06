import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initWebVitals } from './utils/reportWebVitals.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Start collecting Web Vitals (reported to GA4 via gtag in index.html)
initWebVitals()
