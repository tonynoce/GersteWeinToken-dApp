<script lang="ts">
	// TODO
	// ICONS !
	// CHECK DISCONNECTION
	// FAUCET DE PRUEBA ?
	//
	// TODO HANDLE NO METAMASK INSTALLED STORES JS

	import {
		connected,
		provider,
		chainId,
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

	import { txHash, allowanceStore } from '../stores/stores';
	import { GWTContractAddress, USDCtContractAddress } from '../stores/stores';
	import { GWTAbi, USDCtAbi } from '../stores/abi';
	import { getBalance } from '../stores/stores';
	import {
		handleAccountsChanged,
		handleChainChanged,
		addGersteToken,
		addUSDCtToken,
		getWindowEthereum
	} from '../stores/metamask';

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

	function changeChain() {
		alert('Agregue o conéctese a la red Mumbai de Polygon');
	} // no carga el modulo de alert

	let delayMs = 1200;

	getWindowEthereum();
	handleChainChanged();
	handleAccountsChanged();
</script>

<head> <title>GersteWein Tokens !</title> </head>

<main>
	<h1>GersteWein Tokens</h1>
	{#key $connected}
		<!-- {#key $chainId} -->
		<ConnectEthers />
		<!-- 			{#if $chainId == 80001}
 -->
		{#if $connected == true}
			<Balances {delayMs} />

			<CheckAllowance {delayMs} />
			<div class="flex-container">
				{#if $allowanceStore == true}
					<div id="buying" transition:fade={{ delay: delayMs + 800, duration: 500 }}>
						<BuyGersteToken />
					</div>

					<div id="selling" transition:fade={{ delay: delayMs + 950, duration: 250 }}>
						<BurnGersteToken />
					</div>

					<!-- 					{:else}
						<div id="selling" transition:fade={{ delay: delayMs + 950, duration: 250 }}>
							<BurnGersteToken />
						</div> -->
				{/if}
			</div>
			<br />
			<p>La app está en beta, agregue las monedas haciendo click abajo</p>
			<div class="tokensAdd">
				<button on:click={() => addGersteToken()}>Añadir GersteToken</button>
				<button on:click={() => addUSDCtToken()}>Añadir USDCtToken</button>
			</div>
			<TxHashComponent {delayMs} />
			<!-- 				{:else}
					<h2>Conectate a la red Mumbai de Polygon</h2> -->
			<!-- 				{/if}
 -->
			<!-- 			{:else}
				<h2>Conectate a la red Mumbai de Polygon</h2> -->
		{/if}
	{/key}
	<!-- 	{/key}
 -->
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
	.tokensAdd {
		display: grid;
		grid-column: 2;
		gap: 15px;
		grid-template-columns: repeat(2, 1fr);
	}
</style>
