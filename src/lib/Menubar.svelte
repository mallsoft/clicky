<script>
	import { clicks } from '$lib/stores';
	import Store from './shop/Store.svelte';

	let storeOpen = false;
</script>

<aside>
	{#if $clicks > 100n}
		<button class:open={storeOpen} on:click={() => (storeOpen = true)}>Store</button>
	{/if}

	<Store bind:open={storeOpen} />
</aside>

<style lang="scss">
	aside {
		padding: 8px;
		font-size: 0.8em;
	}

	button {
		font-size: 1.2em;
		padding: 8px;
		border-radius: 8px;
		border: 2px solid var(---fgb);
		color: var(---fgb);
		background-color: var(---bg);

		transition: background-color 0.2s, color 0.2s, transform 0.1s;
		&:hover,
		&.open {
			background-color: var(---fgb);
			color: var(---bg);
		}

		&:active {
			transform: translateY(2px);
		}
	}
</style>
