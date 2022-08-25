<script lang="ts">
	import { connected, provider, signerAddress, contracts } from 'svelte-ethers-store';

	import { ethers } from 'ethers';

	import { txHash, getBalance, getAllowance } from '../stores/stores';
	import { GWTContractAddress, USDCtContractAddress } from '../stores/stores';

	import Button from './button.svelte';

	let amountToBurn = 0;

	export let burnTokencito = async () => {
		try {
			const amountTokens = document.getElementById('amountToBurn')?.value;
			console.log(amountTokens);
			if (amountTokens == 0) {
				console.log('Elija un importe válido');
				return false;
			} else {
				const amount = ethers.utils.parseEther(amountTokens);
				const tx = await $contracts.GersteTokenCont.burnMeSome(amount);
				console.log(tx.hash);
				let txReceipt = tx.hash;
				$txHash = txReceipt;

				console.log('a punto de esperar');
				await $provider.waitForTransaction(txReceipt);
				console.log('esperamo y chequeamo saldo');
				await getBalance($signerAddress);
				await getAllowance($signerAddress, $GWTContractAddress);

				amountToBurn = 0;

				// CHECK ALLOWANCE FROM STORE HERE
				return tx.hash;
			}
		} catch (e) {
			console.log(e);
			console.log('No posee suficientes GersteWeinTokens para cambiar');
			amountToBurn = 0;
			return false;
			//txHash.update(tx.hash);
		}
	};
</script>

<main>
	{#if !$connected}
		<p />
	{:else}
		<div>
			{#if $signerAddress === undefined}
				<input type="number" id="amountToBurn" min="0" max="999" value="0" disabled />

				<button disabled>Vender GersteWeinToken</button>
			{:else}
				<h1>{amountToBurn}</h1>
				<input type="number" id="amountToBurn" min="0" max="999" bind:value={amountToBurn} />
				<br /><br />
				<!-- 				<button class="button" on:click={() => burnTokencito()}>Vender GersteWeinToken</button>
 -->
				<Button buttonText="Vender GersteWeinToken" on:click={() => burnTokencito()} />
			{/if}
		</div>
	{/if}
</main>

<style>
	@import '../css/styles.css';
</style>
