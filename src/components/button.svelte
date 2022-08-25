<script>
	export let buttonText;
</script>

<button class="button" on:click>{buttonText}</button>

<style>
	.button {
		background-color: #01426d;
		border: none;
		color: white;
		width: center;
		height: center;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
	}
	.button:hover {
		background-color: #3a3a3a;
		box-shadow: 0px 7px 15px rgba(10, 182, 235, 0.15);
	}
</style>
