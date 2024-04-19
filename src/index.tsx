import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import useMockAdapter from './api/useMockAdapter'
import { App } from './App'

import 'normalize.css'

const root = ReactDOM.createRoot(
  document.getElementById('root')!
)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 0, refetchOnMount: false }
  }
})

const RootApp = () => {
  useMockAdapter()

  return <App />
}

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RootApp/>
    </QueryClientProvider>
  </React.StrictMode>
)
