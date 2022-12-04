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

	import { beforeUpdate, afterUpdate } from 'svelte';
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

	import Onboarding from './onboarding/+page.svelte';

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
			console.log($connected);
		} catch (e) {
			console.log(e);
		}
	});

	let delayMs = 1200;

	const isInstalled = async () => {
		if ($connected === undefined) {
			console.log('hay que hacer onboarding');
			import('./onboarding/+page.svelte');
		}
	};

	//getWindowEthereum();
	handleChainChanged();
	handleAccountsChanged();

	afterUpdate(() => {
		isInstalled();
	});
</script>

<head> <title>GersteWein Tokens !</title> </head>

<main>
	<h1>GersteWein Tokens</h1>
	<!-- 	<button on:click={() => onboarding.startOnboarding()}>onboarding</button>
 -->
	{#key $connected}
		<ConnectEthers />
		{#if $connected == true}
			<Balances {delayMs} />

			<CheckAllowance {delayMs} />
			<div class="tokensAdd">
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
			<div class="betaText">
				<h2>La app está en beta !</h2>
				<pre style="text-align: left;">
Agregue las monedas haciendo click abajo
La primera vez hay hacer
una transacción aprobando
el contrato
			</pre>
			</div>
			<div class="tokensAdd">
				<button class="button" on:click={() => addGersteToken()}>Añadir GersteToken</button>
				<button class="button" on:click={() => addUSDCtToken()}>Añadir USDCtToken</button>
			</div>
			<TxHashComponent {delayMs} />
		{:else}
			<Onboarding />
		{/if}
		<!-- 		<a href="/onboarding">Instalemos Metamask !</a>
 -->
	{/key}
</main>

<svelte:window on:load={() => isInstalled()} />

<style>
	@import '../css/styles.css';

	:global(body) {
		background-color: rgb(27, 27, 27);
		font-family: sans-serif;
		color: white;
		text-align: center;
	}
</style>
