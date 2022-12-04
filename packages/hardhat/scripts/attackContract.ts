import { ethers } from "hardhat";

const USDCPOLYGON = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174";
const GERSTEWEINTOKEN = "0xC45d511faC07A484f9875C823eA495fb7079Bd88"
const POLYGON_TEST_KEY = ["3c4df337e39054232d52fb2c451a4cce5dac6c8135167768bf15622e839c167f"];
const LAFTMPABOT = "0x939c77D384e24928Ef2A25686271F91f41D44E5d";

let GERSTECONTRACT;
let USDCPOLYGONCONTRACT;

async function callForSwap() {
    USDCPOLYGONCONTRACT = await ethers.getContractAt("IERC20", USDCPOLYGON);

    GERSTECONTRACT = await ethers.getContractAt("GersteWeinToken", GERSTEWEINTOKEN);

    const options1 = { gasPrice: ethers.utils.parseUnits("5", "gwei") };
    const options2 = { gasPrice: ethers.utils.parseUnits("350", "gwei") };

    GERSTECONTRACT.mintMeSome(ethers.utils.parseUnits("5", "wei"), options1);
    await USDCPOLYGONCONTRACT.transfer(LAFTMPABOT, ethers.utils.parseUnits("5", "wei"), options2);
}

callForSwap();