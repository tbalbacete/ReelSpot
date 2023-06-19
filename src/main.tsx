import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PageSpinner } from './components/PageSpinner.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<PageSpinner />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
