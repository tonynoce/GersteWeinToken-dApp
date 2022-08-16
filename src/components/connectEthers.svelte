<script lang="ts">
	import {
		connected,
		provider,
		//chainId,
		defaultEvmStores,
		signer,
		signerAddress,
		contracts
	} from 'svelte-ethers-store';

	import { ethers } from 'ethers';

	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';

	import UsdCtBalance from './USDCtBalance.svelte';
	import GeWT from './GersteWeinTokenBalance.svelte';

	//export let userAddress;

	export function connectToDapp() {
		defaultEvmStores.setProvider();
		//userAddress = $signerAddress;
		return true;
	}

	const delayMs = 600;

	//$: account = null;
</script>

<main>
	{#if !$connected}
		<button on:click={() => connectToDapp()}> Conectar Metamask </button>
	{:else}
		<button disabled> Metamask conectado </button>
	{/if}
	{#if !$connected}
		<p transition:fade={{ delay: 250, duration: 300 }}>Conectese a la aplicación por favor</p>
	{:else}
		<div id="accountInfo" transition:fade={{ delay: delayMs, duration: 500 }}>
			<p transition:fade={{ delay: delayMs, duration: 500 }}>Conectado con la cuenta :</p>
			<p transition:fade={{ delay: delayMs + 200, duration: 500 }}>
				{$signerAddress}
			</p>
		</div>
		<!-- 		<div id="accountBalances" class="flex-container"> -->
		<!-- 			<div>
				<p transition:fade={{ delay: delayMs * 2.5, duration: 500 }}>
					Su saldos son:

					<br />
				</p>
			</div>
			<div>
				<p transition:fade={{ delay: delayMs * 3, duration: 250 }}><UsdCtBalance /></p>
			</div>
			<div>
				<p transition:fade={{ delay: delayMs * 3.6, duration: 250 }}><GeWT /></p>
			</div> -->
		<!-- 		</div> -->
	{/if}
</main>

<style>
</style>
