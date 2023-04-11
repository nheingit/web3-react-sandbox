import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import connectors  from './connectors'
import './App.css'
import Card from './components/Card'

function App() {
const [metaMaskConnector, metaMaskHooks] = connectors['MetaMask']
const [phantomConnector, phantomHooks] = connectors['Phantom']

  return (
    <div className="App">
      <h1>Web3-React Connector Playbox</h1>
      <div className="card">
        <Card connector={metaMaskConnector} hooks={metaMaskHooks} name='metamask'/>
        <Card connector={phantomConnector} hooks={phantomHooks} name='phantom' />
      </div>
    </div>
  )
}

export default App
