'use client';

import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { defineChain } from 'viem';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

// 0. Setup queryClient (must be first according to docs)
const queryClient = new QueryClient();

// 1. Get projectId from environment
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'a69043ecf4dca5c34a5e70fdfeac4558';

// 2. Create a metadata object
const metadata = {
  name: 'Seed Vault',
  description: 'AI-powered investment vault with privacy-preserving identity verification',
  url: 'https://seedvault.vercel.app', // origin must match your domain & subdomain
  icons: ['https://seedvault.vercel.app/favicon.ico'],
};

// 3. Set the networks - Only Celo Sepolia testnet
// Define Celo Sepolia testnet (custom network)
const celoSepolia = defineChain({
  id: 11142220,
  name: 'Celo Sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'Sepolia Celo',
    symbol: 'S-CELO',
  },
  rpcUrls: {
    default: { http: ['https://forno.celo-sepolia.celo-testnet.org'] },
    public: { http: ['https://forno.celo-sepolia.celo-testnet.org'] },
  },
  blockExplorers: {
    default: { name: 'CeloScan Sepolia', url: 'https://sepolia.celoscan.io' },
  },
  testnet: true,
});

// Only Celo Sepolia - no mainnet
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const networks = [celoSepolia] as any;

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true,
});

// 5. Create modal (must be called outside React component)
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
  themeMode: 'light',
  themeVariables: ({
    '--w3m-accent': '#B8B4B0', /* primary Warm Gray */
    '--w3m-primary': '#B8B4B0',
    '--w3m-secondary': '#F1EDE8',
    '--w3m-background': '#FFFFFF',
    '--w3m-foreground': '#0E0E0E',
    '--w3m-border-color': '#E6E3E0',
    '--w3m-border-radius-master': '12px',
  } as unknown as Record<string, string>),
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
