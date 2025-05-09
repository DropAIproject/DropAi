import { WalletConnectButton } from '../../components/wallet/WalletConnectButton';
import { WalletInfo } from '../../components/wallet/WalletInfo';
import { Checklist } from '../../components/checklist/Checklist';

import './dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <WalletConnectButton />
      <WalletInfo />
      <Checklist />
    </div>
  );
}

export default Dashboard;
