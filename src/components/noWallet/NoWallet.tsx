import { Link } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import "./NoWallet.css";

const NoWallet = () => {
  const { connected, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const handleClick = () => {
    if (connected) {
      disconnect();
    } else {
      setVisible(true); // opens wallet selection modal
    }
  };

  return (
    <div className="no-wallet-container">
      <div className="no-wallet-card">
        <div className="no-wallet-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M22 10v4" />
            <circle cx="10" cy="12" r="2" />
          </svg>
        </div>
        <h1 className="no-wallet-title">No wallet connected</h1>
        <p className="no-wallet-description">To use this page you must connect your wallet first</p>
        <button className="no-wallet-button" onClick={handleClick}>
          Connect Wallet
        </button>
        <Link to="/" className="no-wallet-home-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NoWallet;
