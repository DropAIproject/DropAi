import { Link } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useState } from "react";

const Header = () => {
  const { connected, disconnect } = useWallet();
  const { setVisible } = useWalletModal();
  const [activeCalss, setActiveClass] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (connected) {
      disconnect();
    } else {
      setVisible(true); // відкриває модалку з вибором гаманця
    }
  };

  const burgerMenu = () => {
    if (isActive) {
      setActiveClass("");
      document.body.style.overflow = "";
    } else {
      setActiveClass("active");
      document.body.style.overflow = "hidden";
    }
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <span>Drop</span>
          <span className="highlight">Ai</span>
        </Link>
      </div>
      <nav className={"nav" + " " + activeCalss}>
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

      <div className="burger-menu" onClick={burgerMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
