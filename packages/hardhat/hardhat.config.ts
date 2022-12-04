import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const POLYGON_TEST_KEY = ["3c4df337e39054232d52fb2c451a4cce5dac6c8135167768bf15622e839c167f"];
const POLYGON_MAINET = ["3c4df337e39054232d52fb2c451a4cce5dac6c8135167768bf15622e839c167f"];

const config: HardhatUserConfig = {
  solidity: "0.8.7",
  networks: {
    hardhat: {
      forking: {
        url: "https://polygon-mainnet.g.alchemy.com/v2/EcH5eGd4UlbTkiVOS6ObkKejTqKix36g"
      }
    },
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/EcH5eGd4UlbTkiVOS6ObkKejTqKix36g",
      accounts: POLYGON_MAINET

    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/j3qhn1OrOOjA1xLUKJbggXoC4mH_LFTu",
      accounts: POLYGON_TEST_KEY
    },
    ftmTestnet: {
      url: "https://rpc.ankr.com/fantom_testnet",
      accounts: POLYGON_TEST_KEY
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai:
        "IYHXZDP6T1A5RW6444PM9U98JEWVGW853S",
      ftmTestnet:
        "B1Z35AJJ27UGQFPZIZJZM5JDTZ3NQRU186"
    },
  }
};

export default config;
