<script lang="ts">
	// TODO
	// ICONS !
	// ADD TOKENS
	// CHECK CHAIN ID
	// CHECK DISCONNECTION

	import {
		connected,
		provider,
		//chainId,
		defaultEvmStores,
		signer,
		signerAddress,
		contracts
	} from 'svelte-ethers-store';

	import { onMount } from 'svelte';
	import { ethers } from 'ethers';
	import { fade } from 'svelte/transition';

	import CheckAllowance from '../components/checkAllowance.svelte';
	import ConnectEthers from '../components/connectEthers.svelte';
	import Balances from '../components/balances.svelte';
	import TxHashComponent from '../components/txHashComponent.svelte';
	import BuyGersteToken from '../components/buyGersteToken_v3.svelte';
	import BurnGersteToken from '../components/burnGersteToken.svelte';

	import { txHash, allowanceStore, txMinada } from '../stores/stores';
	import { GWTContractAddress, USDCtContractAddress } from '../stores/stores';
	import { GWTAbi, USDCtAbi } from '../stores/abi';
	import { getBalance } from '../stores/stores';

	// contracts store

	defaultEvmStores.attachContract('GersteTokenCont', $GWTContractAddress, $GWTAbi);
	defaultEvmStores.attachContract('USDCtContract', $USDCtContractAddress, $USDCtAbi);

	export function connectToDapp() {
		defaultEvmStores.setProvider();
		return true;
	}

	onMount(() => {
		try {
			defaultEvmStores.setProvider();
		} catch (e) {
			console.log(e);
		}
	});

	let delayMs = 1200;
</script>

<head> <title>GersteWein Tokens !</title> </head>

<main>
	<h1>GersteWein Tokens</h1>

	<ConnectEthers />
	{#if $connected}
		<Balances {delayMs} />

		<CheckAllowance {delayMs} />
		<div class="flex-container">
			{#if $allowanceStore == true}
				<div id="buying" transition:fade={{ delay: delayMs + 800, duration: 500 }}>
					<BuyGersteToken />
				</div>
			{/if}

			<div id="selling" transition:fade={{ delay: delayMs + 950, duration: 250 }}>
				<BurnGersteToken />
			</div>
		</div>
		<TxHashComponent {delayMs} />
	{/if}
</main>

<style>
	:global(body) {
		background-color: rgb(27, 27, 27);
		font-family: sans-serif;
		color: white;
		text-align: center;
	}

	h1 {
		color: white;
		font-family: sans-serif;
		text-align: center;
	}
	.flex-container {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: justify;
	}
</style>
