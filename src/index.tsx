import React from 'react'
import ReactDOM from 'react-dom/client'
import useMockAdapter from 'src/api/useMockAdapter'

import { App } from './App'

import 'normalize.css'

const root = ReactDOM.createRoot(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  document.getElementById('root')!
)

const RootApp = () => {
  useMockAdapter()

  return <App />
}

root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
)
