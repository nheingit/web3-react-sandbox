import { initializeConnector } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { Phantom } from './Phantom/provider'

declare global {
    interface Window {
        phantom: any
    }
}

const metaMask= initializeConnector<MetaMask>((actions) => new MetaMask({ actions }))
const phantom = initializeConnector<Phantom>((actions) => new Phantom({ actions }))

const connectors = {
    "MetaMask": metaMask,
    "Phantom": phantom
}

export default connectors