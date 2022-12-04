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

	const rpc = 'https://polygon-mumbai.g.alchemy.com/v2/j3qhn1OrOOjA1xLUKJbggXoC4mH_LFTu';
	const chainid = 80001;

	const provider = new ethers.providers.JsonRpcProvider(rpc, chainid);
	const contractReadOnly = new ethers.Contract($GWTContractAddress, $GWTAbi, provider);

	export async function GersteWeinToken() {
		let GeWT = await contractReadOnly.balanceOf($signerAddress);

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
