const axios = require("axios");

async function queryOllama(prompt, maxAttempts = 5) {
  let attempt = 0;

  while (attempt < maxAttempts) {
    try {
      const response = await axios.post("http://localhost:11434/api/generate", {
        model: "llama3.2:3b",
        prompt: prompt,
        stream: false,
      });

      const rawAnswer = response.data.response.trim().toLowerCase();

      let finalAnswer;

      if (rawAnswer.includes("true") && !rawAnswer.includes("false")) {
        finalAnswer = true;
      } else if (rawAnswer.includes("false") && !rawAnswer.includes("true")) {
        finalAnswer = false;
      } else {
        console.warn(
          `❓ Спроба ${attempt + 1}: нечітка відповідь — повторюємо запит...`
        );
        attempt++;
        continue;
      }

      console.log("✅ Raw model response:\n", rawAnswer);
      console.log("✅ Parsed answer:", finalAnswer);
      return finalAnswer;
    } catch (error) {
      console.error("❌ Error:", error.message);
      if (error.response) {
        console.error("Error status:", error.response.status);
        console.error("Answear:", error.response.data);
      }
      break;
    }
  }

  console.error("❌ Не вдалося отримати чітку відповідь після кількох спроб.");
  return null;
}

queryOllama(
  `оціни інформацію про airdrop і дай оцінку true якщо він нормальний і false, якщо ні.:34°\n Airdrop Link: Visit the Ink Sack\n Total value: n/a\n✅ Airdrop confirmed\n Platform: sui\n\nWhat is Ika Network?\n\nIka Network (ex dWallet network) is a sub-second Multi-Party Computation (MPC) network built on the Sui blockchain, designed to enable zero-trust interoperability between different blockchains. The project aims to solve cross-chain asset coordination challenges by allowing secure, decentralized control over assets without relying on traditional bridges.\n\nIka leverages Zero Trust Protocols (ZTPs) and dWallet technology to enable programmable native assets like Bitcoin, Ethereum, and Solana directly on the Sui blockchain. The network can process up to 10,000 transactions per second with sub-second finality, utilizing hundreds of signer nodes for maximum security and scalability.\n\nIka Network Airdrop Details\n\nIka Network has confirmed a community airdrop as part of its Token Generation Event (TGE) scheduled for Q2 2025. The project has allocated 6% of the total token supply (600 million IKA tokens) for the initial airdrop. With a total funding of over $21 million from the Sui Foundation and other investors, Ika represents one of the most anticipated airdrops in the Sui ecosystem.\n\nThe airdrop uses a gamified points system called “Ink Droplets,” which participants can earn through various activities on the platform. These droplets will later be converted to IKA tokens when the TGE occurs.\n\nStep-by-Step Guide:\nHow to Participate in the Ika Network Airdrop\nStep 1: Visit the Official Platform\nGo to Ink Sack pre-mainnet page\nConnect your Sui wallet\nComplete the initial setup and verification\nStep 2: Complete Platform Tasks\nSign and add your wallet to the platform\nComplete all tasks listed on the website\nEach task comes with detailed descriptions to guide you through\nStep 3: Stake ISUI for Daily Droplets\nAcquire ISUI tokens through Aftermath Finance\nVisit the staking section on the Ika platform\nStake your ISUI tokens to earn daily droplets\nRate: 2 ISUI = 1 daily droplet\n\nNote: You can purchase SUI tokens from Binance  for the best rates and user experience.\n\nStep 4: NFT Staking (Optional but Rewarding)\nVisit TradePort\nPurchase “THE MF SQUID” NFTs from the official collection\nStake your NFT on the Ika platform\nThis method typically yields higher droplet rewards but requires a larger investment\nStep 5: Social Media Engagement (Optional)\nFollow @ikadotxyz on X (Twitter)\nTag @ikadotxyz and @GiveRep in your posts about Ika\nJoin the official Discord community for updates and additional opportunities\nContinue regular engagement for potential bonus rewards\nTips for Maximizing Your Airdrop Rewards\nConsistent Daily Activity\nCheck the platform daily to maintain your droplet earning streak\nComplete any new tasks as they become available\nKeep your staked assets locked for maximum rewards\nStrategic Asset Management\nConsider the current ISUI staking rate when deciding how much to stake\nMonitor NFT floor prices if considering the NFT route\nBalance your investment with the potential returns based on your risk tolerance\nUnderstanding Ika Network Technology\nMPC Network Architecture\n\nIka’s Multi-Party Computation network uses a 2PC-MPC v2 protocol that enables secure transactions without revealing sensitive data. This technology allows multiple parties to compute transactions collectively while maintaining individual privacy and security.\n\nCross-Chain Capabilities\n\nThe platform enables native programming of major cryptocurrencies like Bitcoin, Ethereum, and Solana on the Sui blockchain without requiring wrapped tokens or centralized bridges. This approach significantly reduces security risks associated with traditional cross-chain solutions.\n\nTechnical Specifications\nTransaction Speed: Sub-second finality\nThroughput: Up to 10,000 TPS\nNode Network: Hundreds of signer nodes\nPrimary Blockchain: Sui Network\nSupported Assets: BTC, ETH, SOL, and other major cryptocurrencies\nFrequently Asked Questions\nWhen is the Ika Network TGE scheduled?\n\nThe Token Generation Event is scheduled for Q2 2025, though an exact date has not been announced. The team has confirmed that tokenomics are live and distribution is confirmed.\n\nWhat are the total token allocations?\nTotal Supply: 10 billion IKA tokens\nCommunity Allocation: 50% (5 billion IKA)\nAirdrop Allocation: 6% (600 million IKA)\nIs there a minimum requirement to participate?\n\nThere is no officially stated minimum requirement, but you need to have SUI tokens for transaction fees and ISUI tokens if you choose the staking route. The amount you can earn depends on your level of participation.\n\nCan I still participate if I missed earlier campaigns?\n\nYes, the current airdrop campaign is ongoing, and the platform continues to offer opportunities for new participants. While previous Galxe campaigns and NFT launches provided early advantages, the main airdrop is still accessible.\n\nWhat are the risks involved?\n\nThe main risks include:\n\nPrice volatility of NFTs and tokens\nSmart contract risks (though Ika has substantial backing)\nThe airdrop is still speculative until officially confirmed\nNFT investments carry higher risk due to price fluctuations\nConclusion\n\nIka Network represents one of the most promising airdrop opportunities in the Sui ecosystem, backed by significant funding and addressing real challenges in cross-chain interoperability. The combination of sub-second transaction speeds, zero-trust security, and programmable native assets positions Ika as a potential game-changer in decentralized finance.\n\nWith the TGE approaching in Q2 2025 and 600 million IKA tokens allocated for the initial airdrop, participants have multiple ways to earn rewards through staking, NFT holdings, and community engagement. Whether you choose the safer ISUI staking route or the higher-reward NFT path, consistent participation and community engagement are key to maximizing your potential returns.\n\nRemember to only invest what you can afford to lose and always verify information through official channels. The crypto space is dynamic, and project details can change, so stay connected with the Ika community for the latest updates and announcements.\n\nYou're interested in more projects that do not have any token yet and could potentially airdrop a governance token to early users in the future? Then check out our list of potential retroactive airdrops to not miss out on the next DeFi airdrop!\n\nDon't forget to follow us on Twitter, Telegram, & Facebook and subscribe our newsletter to receive new airdrops!\n\nVISIT THE INK SACK \n\n Report Issue`
);
