<script lang="ts">
	import { ethers } from 'ethers';
	import {
		contracts,
		defaultEvmStores,
		signerAddress,
		signer,
		provider
	} from 'svelte-ethers-store';

	import { txHash, allowanceStore } from '../stores/stores';
	import { GWTContractAddress, USDCtContractAddress, getAllowance } from '../stores/stores';

	import { USDCtAbi } from '../stores/abi';

	import { fade } from 'svelte/transition';

	const rpc = 'https://polygon-mumbai.g.alchemy.com/v2/j3qhn1OrOOjA1xLUKJbggXoC4mH_LFTu';
	const chainid = 80001;

	const ethersProvider = new ethers.providers.JsonRpcProvider(rpc, chainid);
	//const signer = provider.getSigner();

	const USDCtcontractReadOnly = new ethers.Contract(
		$USDCtContractAddress,
		$USDCtAbi,
		ethersProvider
	);

	const amountToApprove = ethers.utils.parseEther('999999');

	async function approveMe() {
		//const tx = await contract.approve(GWTContract, amountToApprove);
		const tx = await $contracts.USDCtContract.approve($GWTContractAddress, amountToApprove);
		console.log(tx.hash);
		let txReceipt = tx.hash;
		$txHash = txReceipt;

		await $provider.waitForTransaction(txReceipt);

		await getAllowance($signerAddress, $GWTContractAddress);
		return tx.hash;
	}

	export let delayMs: number;
</script>

<main>
	{#await getAllowance($signerAddress, $GWTContractAddress)}
		<p transition:fade={{ delay: delayMs, duration: 500 }}>Aguarde un momento</p>
	{:then}
		<!-- El allowance es {value} -->
		{#key $allowanceStore == false}
			{#if $allowanceStore == false}
				<div id="approveDiv" transition:fade={{ delay: delayMs + 500, duration: 500 }}>
					<h2>Apruebe el contrato por favor</h2>
					<button
						on:click={() => approveMe()}
						transition:fade={{ delay: delayMs + 700, duration: 500 }}>Aprobar el contrato</button
					>
					<p transition:fade={{ delay: delayMs + 800, duration: 250 }}>
						La primera vez hay que aprobar el contrato para
					</p>
					<p transition:fade={{ delay: delayMs + 900, duration: 250 }}>poder interactuar.</p>
				</div>
			{/if}
		{/key}
	{/await}
</main>
