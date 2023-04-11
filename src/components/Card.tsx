import { useEffect, useState } from 'react'
import { Web3ReactHooks } from '@web3-react/core'
import { Connector } from '@web3-react/types'

export default function Card({connector, hooks, name}: {connector: Connector, hooks: Web3ReactHooks, name: string}) {
  const { useChainId, useAccounts, useIsActivating, useIsActive } = hooks
  const isActivating = useIsActivating()
  const isActive = useIsActive()
  const accounts = useAccounts()
  const chain = useChainId()

  const [error, setError] = useState<Error | undefined>(undefined)
  const [connectionStatus, setConnectionStatus] = useState('Disconnected')

  const handleToggleConnect = () => {
    setError(undefined) // clear error state

    if (isActive) {
      if(connector?.deactivate) {
        void connector.deactivate()
      } else {
        void connector.resetState()
      }
    }
    else if (!isActivating) {
      setConnectionStatus('Connecting..')
        Promise.resolve(connector.activate(1))
        .catch((e) => {
          connector.resetState()
          setError(e)
        }) 
      }
  }
  useEffect(() => {
    if(isActive) {
      setConnectionStatus('Connected')
    } else {
      setConnectionStatus('Disconnected')
    }
  }
  ,[isActive])

  return (
    <div>
      <p>{name.toUpperCase()}</p>
      <h3>Status - {(error?.message) ? ("Error: " + error.message) : connectionStatus}</h3>
      <h3>Address - {accounts ? accounts[0] : "No Account Detected"}</h3>
      <h3>ChainId -  {chain ? chain : 'No Chain Connected'}</h3>
      <button onClick={handleToggleConnect} disabled={false}>
        {isActive ? "Disconnect" : "Connect"}
      </button>
    </div>
  )
}