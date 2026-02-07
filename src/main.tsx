import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { router } from './router.tsx'
import StickyMobileCTA from './components/StickyMobileCTA.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <StickyMobileCTA />
    </HelmetProvider>
  </React.StrictMode>,
)
