import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  // Solidity compiler version
  solidity: "0.8.9",
  networks: {
    ganache: {
      // Change the url according to your ganache configuration
      url: 'http://localhost:8545',
      // Change these accounts private keys according to your ganache configuration.
      accounts: [
        '0ffc64d8d4ce073918603e6dd25b82dde19ad97c2f8fc57fc9f0640829e45606',
        '51c422f357c7246d8cc1b2b1f68472b879e3f6470f8d9616bc847a33e8a6c9db',
        '8c5ab448ca87ed4778bb2eb5a5e1ef1042f2134b4d30d15debda87dfb48305db',
        '05eff527d3ef443ee48a2303b6997006f0c7746f9a81c4e070883b7f38a61aac',
      ]
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};

export default config;
