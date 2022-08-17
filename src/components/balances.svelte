<script lang="ts">
	import { connected } from 'svelte-ethers-store';
	import { fade } from 'svelte/transition';

	import UsdCtBalance from './USDCtBalance.svelte';
	import GeWT from './GersteWeinTokenBalance.svelte';

	import { txMinada } from '../stores/stores';

	export let delayMs: number;
</script>

<main>
	<div>
		<p transition:fade={{ delay: delayMs * 2.5, duration: 500 }}>
			Su saldos son:
			<br />
		</p>
	</div>
	<div id="accountBalances" class="flex-container">
		<div>
			<p transition:fade={{ delay: delayMs * 3, duration: 250 }}><UsdCtBalance /></p>
		</div>
		<div>
			<p transition:fade={{ delay: delayMs * 3.6, duration: 250 }}><GeWT /></p>
		</div>
	</div>
</main>

<style>
	.flex-container {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: justify;
	}
</style>
