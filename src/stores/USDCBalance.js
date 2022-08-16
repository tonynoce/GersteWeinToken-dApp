import { ethers } from 'ethers';
import {USDCtContract} from "./stores.js"


const rpc = 'https://polygon-mumbai.g.alchemy.com/v2/j3qhn1OrOOjA1xLUKJbggXoC4mH_LFTu';
const chainid = 80001;
const abi = ['function balanceOf(address account) external view returns (uint256)']


const provider = new ethers.providers.JsonRpcProvider(rpc, chainid)
const contract = new ethers.Contract(USDCtContract, abi, provider)
const signer = provider.getSigner()

export const getUSDCBalance = async() => {
    const USDC = await contract.balanceOf(signer);
    return USDC / 1e18;
}