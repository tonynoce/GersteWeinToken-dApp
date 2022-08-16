<script lang="ts">
	import { ethers } from 'ethers';

	import {
		connected,
		defaultEvmStores,
		signer,
		signerAddress,
		contracts
	} from 'svelte-ethers-store';

	import { txMinada, USDCtBalance } from '../stores/stores';
	import { USDCtContractAddress } from '../stores/stores';

	import { USDCtAbi } from '../stores/abi';

	// create contract instance
	/* 	const contractAddress = '0x433E75eB0E582b8a4b9a4706977Ed90A85F671AA';
	 */ /* 	const abi = [
		'function balanceOf(address account) public view returns (uint256)',
		'function totalSupply() public view returns (uint256)'
	]; */
	//defaultEvmStores.attachContract('USDCtContract', contractAddress, abi);

	const rpc = 'https://polygon-mumbai.g.alchemy.com/v2/j3qhn1OrOOjA1xLUKJbggXoC4mH_LFTu';
	const chainid = 80001;

	const provider = new ethers.providers.JsonRpcProvider(rpc, chainid);

	//defaultEvmStores.setProvider();
	const contractReadOnly = new ethers.Contract($USDCtContractAddress, $USDCtAbi, provider);

	// guess the usdc balance function
	export async function USDCBalance() {
		/* 		setTimeout(() => {
			console.log('1 Segundo esperado para USDCBalance');
		}, 1000); */
		let USDC = await contractReadOnly.balanceOf($signerAddress);
		//const USDC = await $contracts.USDCtContract.balanceOf($signerAddress);

		USDC = ethers.utils.formatEther(USDC);
		USDC = Number(USDC).toFixed(2);
		$USDCtBalance = USDC;

		return USDC / 1e18;
	}
</script>

{#await USDCBalance()}
	<p>USDCt: Cargando...</p>
{:then}
	<p>USDCt:</p>
	<p>{$USDCtBalance}</p>
{:catch error}
	<p>Hay un error: {error.message}</p>
{/await}
