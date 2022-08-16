<script lang="ts">
	import { ethers } from 'ethers';

	import {
		connected,
		//provider,
		//chainId,
		//chainData,
		defaultEvmStores,
		signer,
		signerAddress,
		contracts
	} from 'svelte-ethers-store';

	import { txMinada, GEWtBalance } from '../stores/stores';
	import { GWTContractAddress } from '../stores/stores';

	import { GWTAbi } from '../stores/abi';

	// create contract instance
	/* 	const contractAddress = '0x183254eaDCCb36779132eDD22e31e7B5500aEcE8';
	 */ /* 	const abi = [
		'function balanceOf(address account) external view returns (uint256)',
		'function totalSupply() public view returns (uint256)'
	]; */

	const rpc = 'https://polygon-mumbai.g.alchemy.com/v2/j3qhn1OrOOjA1xLUKJbggXoC4mH_LFTu';
	const chainid = 80001;

	const provider = new ethers.providers.JsonRpcProvider(rpc, chainid);
	const contractReadOnly = new ethers.Contract($GWTContractAddress, $GWTAbi, provider);

	//defaultEvmStores.attachContract('GersteTokenContract', contractAddress, abi);
	//defaultEvmStores.setProvider();

	// guess the GersteToken balance function

	export async function GersteWeinToken() {
		/* 		setTimeout(() => {
			console.log('1 Segundo esperado para GersteBalance');
		}, 2000); */
		//defaultEvmStores.setProvider();
		let GeWT = await contractReadOnly.balanceOf($signerAddress);
		//const GeWT = await $contracts.GersteTokenCont.balanceOf($signerAddress);
		GeWT = ethers.utils.formatEther(GeWT);
		GeWT = Number(GeWT).toFixed(2);
		$GEWtBalance = GeWT;
		return GeWT / 1e18;
	}
</script>

{#await GersteWeinToken()}
	<span>GersteWeinToken: Cargando...</span>
{:then}
	<p>GersteWeinToken:</p>
	<p>{$GEWtBalance}</p>
{:catch error}
	<p>Hay un error: {error.message}</p>
{/await}
