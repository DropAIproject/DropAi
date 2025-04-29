import { WalletConnectButton } from '../../components/wallet/WalletConnectButton';
import { WalletInfo } from '../../components/wallet/WalletInfo';
import { Checklist } from '../../components/checklist/Checklist';

function Dashboard() {
  return (
    <div className="space-y-6">
      <WalletConnectButton />
      <WalletInfo />
      <Checklist />
    </div>
  );
}

export default Dashboard;
