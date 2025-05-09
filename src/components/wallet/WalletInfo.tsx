import { useWallet } from '../../hooks/useWallet';

export function WalletInfo() {
  const { walletAddress } = useWallet();

  if (!walletAddress) return null;

  return (
    <div className="mt-4 text-gray-700">
      Ваш гаманець: <span className="font-mono">{walletAddress}</span>
    </div>
  );
}
