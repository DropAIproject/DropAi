import { WalletConnectButton } from "../../components/wallet/WalletConnectButton";
import { WalletInfo } from "../../components/wallet/WalletInfo";
import { Checklist } from "../../components/checklist/Checklist";
import { useWallet } from "@solana/wallet-adapter-react";

import "./dashboard.css";
import NoWallet from "../../components/noWallet/NoWallet";

function Dashboard() {
  const { connected, publicKey } = useWallet();

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {connected ? (
          <>
            <WalletInfo />
            <Checklist />
          </>
        ) : (
          <NoWallet />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
