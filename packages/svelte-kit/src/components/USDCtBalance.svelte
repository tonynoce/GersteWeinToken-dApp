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
	import Balances from './balances.svelte';

	const rpc = 'https://polygon-mumbai.g.alchemy.com/v2/j3qhn1OrOOjA1xLUKJbggXoC4mH_LFTu';
	const chainid = 80001;

	const provider = new ethers.providers.JsonRpcProvider(rpc, chainid);

	const contractReadOnly = new ethers.Contract($USDCtContractAddress, $USDCtAbi, provider);

	// get usdc balance
	export async function USDCBalance() {
		let USDC = await contractReadOnly.balanceOf($signerAddress);

		USDC = ethers.utils.formatEther(USDC);
		USDC = Number(USDC).toFixed(2);
		$USDCtBalance = USDC;

		return USDC / 1e18;
	}
</script>

<!-- <img src="../src/token_icons/usd-coin-usdc-logo.svg" alt="USD icon" width="40" height="40" /> -->
<img
	src="https://cryptologos.cc/logos/usd-coin-usdc-logo.svg"
	alt="USD icon"
	width="40"
	height="40"
/>
{#await USDCBalance()}
	<p>USDCt: Cargando...</p>
{:then}
	<!-- <p>USDCt:</p> -->
	<p>{$USDCtBalance}</p>
{:catch error}
	<p>Hay un error: {error.message}</p>
{/await}
