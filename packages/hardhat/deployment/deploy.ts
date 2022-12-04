import { ethers } from "hardhat";

async function main() {

  const USDcoin = await ethers.getContractFactory("USDcoin");
  const usdcoin = await USDcoin.deploy();
  await usdcoin.deployed();

  const GersteWeinToken = await ethers.getContractFactory("GersteWeinToken");
  const gersteweintoken = await GersteWeinToken.deploy();

  await gersteweintoken.deployed();

  console.log(`USDcoin deployed to ${usdcoin.address}`);
  console.log(`GersteweinToken deployed to ${gersteweintoken.address}`);
  console.log(`Thank you for deploying with Block33 again !`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
