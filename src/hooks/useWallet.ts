import { useState } from 'react';

export function useWallet() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = async () => {
    // @ts-expect-error — ми знаємо, що solana є у Phantom, але TS не знає про це
    const provider = window.solana;

    if (provider && provider.isPhantom) {
      try {
        const response = await provider.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (error) {
        console.error('Помилка підключення гаманця:', error);
      }
    }
  };

  return { connectWallet, walletAddress };
}
