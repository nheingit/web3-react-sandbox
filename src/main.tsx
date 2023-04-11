import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { JsonRpcProvider} from 'ethers'
import './index.css'

function getLib(provider: string) {
  return new JsonRpcProvider(provider)
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
