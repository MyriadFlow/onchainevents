'use client'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { polygon } from 'wagmi/chains'

// Get projectId from https://cloud.walletconnect.com
export const projectId = 'c26b357532f63f7ba31efebac88d0eed'

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
	name: 'Web3Modal',
	description: 'Web3Modal Example',
	url: 'https://web3modal.com',
	icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

// Create wagmiConfig
const chains = [polygon] as const
export const config = defaultWagmiConfig({
	chains,
	projectId,
	metadata,
	auth: {
		email: true,
		socials: ['github', 'google', 'x', 'discord', 'apple'],
		showWallets: true, // default to true
		walletFeatures: true,
	},
	ssr: true,
	storage: createStorage({
		storage: cookieStorage,
	}),
})
