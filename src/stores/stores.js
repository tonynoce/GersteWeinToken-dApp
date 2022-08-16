import { writable, readable } from 'svelte/store';
import { ethers } from 'ethers';
import {GWTAbiJs, USDCtAbiJs} from "./abi"

	
export const txHash = writable();
export let allowanceStore = writable();
export const txMinada = writable();

export const GWTContractAddress = readable('0x183254eaDCCb36779132eDD22e31e7B5500aEcE8')
export const GWTContract = '0x183254eaDCCb36779132eDD22e31e7B5500aEcE8'

export const USDCtContractAddress = readable("0x433E75eB0E582b8a4b9a4706977Ed90A85F671AA")
export const USDCtContract = "0x433E75eB0E582b8a4b9a4706977Ed90A85F671AA"

export let USDCtBalance = writable();
export let GEWtBalance = writable();


// Balance section
const rpc = 'https://polygon-mumbai.g.alchemy.com/v2/j3qhn1OrOOjA1xLUKJbggXoC4mH_LFTu';
const chainid = 80001;
const abi = ['function balanceOf(address account) external view returns (uint256)',
]


const provider = new ethers.providers.JsonRpcProvider(rpc, chainid)
//const signer = provider.getSigner()

const contractUSDCt = new ethers.Contract(USDCtContract, USDCtAbiJs, provider)
const contractGEWT = new ethers.Contract(GWTContract, GWTAbiJs, provider)


export const getBalance = async(account) => {
    const USDC = await contractUSDCt.balanceOf(account);
    USDCtBalance.set((USDC / 1e18))

    const GEwt = await contractGEWT.balanceOf(account);
    GEWtBalance.set((GEwt / 1e18))
}

export const getAllowance = async(owner, spender) => {
    let allowance = await contractUSDCt.allowance(owner, spender);
    allowance = ethers.utils.formatEther(allowance);
    console.log("Allowance returned: ", allowance);

    if (allowance == 0) {
        console.log('es false');
        allowanceStore.set(false);
        return false;
    } else {
        console.log('tutto benne');
        allowanceStore.set(true);
        return true;
    }
}