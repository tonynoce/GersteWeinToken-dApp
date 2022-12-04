import { ethers } from "hardhat";
import { BigNumber } from "ethers";

/**
 * @notice this deploy script is intended for mumbai in order
 * to facilitate the development and test in that blockchain
 */

const USDCOIN = "0xFEca406dA9727A25E71e732F9961F680059eF1F9"
const AMOUNTTOAPPROVE = ethers.utils.formatUnits("9999", "wei");

async function main() {

  const GersteWeinToken = await ethers.getContractFactory("GersteWeinToken");
  const gersteweintoken = await GersteWeinToken.deploy();

  await gersteweintoken.deployed();

  console.log(`GersteweinToken deployed to ${gersteweintoken.address}`);

  console.log(`Setting the usd Coin for gerstetoken contract...`);
  const USDCOINcontract = await ethers.getContractAt("ERC20", USDCOIN);
  await gersteweintoken.setUSDcoin(USDCOIN);

  console.log(`Approving the allowance...`);
  await USDCOINcontract.approve(gersteweintoken.address, AMOUNTTOAPPROVE);


  console.log(`Thank you for deploying with Block33 again !`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
