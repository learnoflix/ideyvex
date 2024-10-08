require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.23",
  networks: {
    "base-sepolia": {
      chainId: 84532,
      url: "https://sepolia.base.org", 
      accounts: [`0x${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`],
    },
  },
};
