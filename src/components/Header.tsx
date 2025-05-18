import { Link } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

const Header = () => {
  const { connected, disconnect } = useWallet();
  const { setVisible } = useWalletModal();

  const handleClick = () => {
    if (connected) {
      disconnect();
    } else {
      setVisible(true); // відкриває модалку з вибором гаманця
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <span>Drop</span>
          <span className="highlight">Ai</span>
        </Link>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        {connected && (
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        )}

        <button className="wallet-button" onClick={handleClick}>
          {connected ? "Disconect Wallet" : "Connect Wallet"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
