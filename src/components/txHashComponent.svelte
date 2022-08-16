<script lang="ts">
	import { fade } from 'svelte/transition';
	import { txHash, txMinada } from '../stores/stores';

	import { provider } from 'svelte-ethers-store';

	import { ethers } from 'ethers';

	export let delayMs: number;

	function resetTxHash() {
		setTimeout(() => {
			$txHash = undefined;
			console.log('$txHash es ahora ', $txHash);
		}, 7500);
	}

	const txreceipt = async () => {
		let tx = $txHash;
		let txWait = await $provider.waitForTransaction(tx);
		console.log(txWait);
		$txMinada = true;
		console.log('Ejecutando reseteo de $txHash');
		resetTxHash();
		return 'Transacción minada!';
	};
</script>

<main>
	{#if $txHash != undefined}
		<!-- 		<br />
	{:else}
 -->
		{#key $txHash}
			<br />
			<div id="txhash" transition:fade={{ delay: delayMs, duration: 500 }}>
				<p>Transacción mandada:</p>
				<a
					transition:fade={{ delay: delayMs + 450, duration: 500 }}
					href="https://mumbai.polygonscan.com/tx/{$txHash}"
					target="_blank"
				>
					{$txHash}
				</a>
			</div>
			{#await txreceipt()}
				<p transition:fade={{ delay: delayMs + 800, duration: 500 }}>
					Esperando que la transacción se confirme...
				</p>
			{:then value}
				<h2 transition:fade={{ delay: delayMs, duration: 500 }}>{value}</h2>
			{:catch error}
				<h2>Hubo un error: {error}</h2>
			{/await}
		{/key}
	{/if}
</main>
