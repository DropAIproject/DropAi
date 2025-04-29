import { useWallet } from '../../hooks/useWallet';
import { Button } from '../ui/Button';

export function WalletConnectButton() {
  const { connectWallet, walletAddress } = useWallet();

  return (
    <div>
      {walletAddress ? (
        <div className="text-green-600 font-semibold">Підключено</div>
      ) : (
        <Button onClick={connectWallet}>Підключити гаманець</Button>
      )}
    </div>
  );
}
