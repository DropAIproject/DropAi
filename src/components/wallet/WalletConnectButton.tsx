import { useWallet } from '../../hooks/useWallet';
import { Button } from '../ui/Button';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export function WalletConnectButton() {

  return (
    <div>
     <WalletMultiButton />
    </div>
  );
}
