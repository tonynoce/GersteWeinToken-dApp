<script lang="ts">
	import {
		connected,
		provider,
		chainId,
		defaultEvmStores,
		signer,
		signerAddress,
		contracts
	} from 'svelte-ethers-store';

	import { ethers } from 'ethers';

	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';

	/* 	function connectToDapp() {
		defaultEvmStores.setProvider();
		//userAddress = $signerAddress;
		return true;
	} */

	const delayMs = 600;

	/* 	const chainIdEthers = async () => {
		await ethers.providers.getDefaultProvider();
	}; */

	//const network = provider.getNetwork();
	//const chainIdEthers = network.chainId;

	//console.log('la red es: ', chainIdEthers);

	let checkChainId = () => {
		if ($chainId == 80001) {
			return true;
		} else {
			defaultEvmStores.disconnect();
			console.log('desconectado maquinola');
			return false;
		}
	};

	/* 	onMount(() => {
		try {
			defaultEvmStores.setProvider();
		} catch (e) {
			console.log(e);
		}
	}); */

	//$: account = null;
</script>

<main>
	{#key $connected}
		{#if !$connected}
			<button on:click={() => connectToDapp()}> Conectar Metamask </button>
		{:else}
			<button disabled> Metamask conectado </button>
		{/if}
		{#if !$connected}
			<p transition:fade={{ delay: 250, duration: 300 }}>Conectese a la aplicación por favor</p>
		{:else}
			<div id="accountInfo" transition:fade={{ delay: delayMs, duration: 500 }}>
				<p transition:fade={{ delay: delayMs, duration: 500 }}>Conectado con la cuenta:</p>
				<p class="signerAddress" transition:fade={{ delay: delayMs + 200, duration: 500 }}>
					{$signerAddress}
				</p>
			</div>
		{/if}
	{/key}
</main>

<style>
	.signerAddress {
		font-weight: bold;
	}
</style>
