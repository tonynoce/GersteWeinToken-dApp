<script lang="ts">
	import { connected, provider, signerAddress, contracts } from 'svelte-ethers-store';

	import { ethers } from 'ethers';

	import { txHash, getBalance, getAllowance } from '../stores/stores';
	import { GWTContractAddress, USDCtContractAddress } from '../stores/stores';

	let amountToBuy = 0;

	export let mintTokencitoV2 = async () => {
		try {
			const amountTokens = document.getElementById('amountToBuy')?.value;
			console.log(amountTokens);
			if (amountTokens == 0) {
				console.log('Elija un importe válido');
				/* 			} else if (amountTokens > $USDCtBalance) {
				console.log('No posee suficiente saldo en USDCt'); */
			} else {
				const amount = ethers.utils.parseEther(amountTokens);
				const tx = await $contracts.GersteTokenCont.mintMeSome(amount);
				console.log(tx.hash);
				let txReceipt = tx.hash;
				$txHash = txReceipt;

				console.log('a punto de esperar');
				await $provider.waitForTransaction(txReceipt);
				console.log('esperamo y chequeamo saldo');
				await getBalance($signerAddress);
				await getAllowance($signerAddress, $GWTContractAddress);

				amountToBuy = 0;

				return tx.hash;
			}
		} catch (e) {
			console.log(e);
			console.log('No posee suficiente saldo bb');
			amountToBuy = 0;
		}
	};
</script>

<main>
	{#if !$connected}
		<p />
	{:else}
		<div>
			{#if $signerAddress === undefined}
				<input type="number" id="amountToBuy" min="0" max="999" value="0" disabled />

				<button disabled>Comprar GersteWeinToken</button>
			{:else}
				<h1>{amountToBuy}</h1>
				<input type="number" id="amountToBuy" min="0" max="999" bind:value={amountToBuy} />
				<br /><br />
				<button on:click={() => mintTokencitoV2()}>Comprar GersteWeinToken</button>
				<br />
			{/if}
		</div>
	{/if}
</main>
