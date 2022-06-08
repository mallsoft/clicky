<script>
	import { clicks } from '$lib/core/stores';
	import Shop from '$lib/context/Shop.svelte';

	let shopOpen = false;
</script>

<section>
	<button class:open={shopOpen} on:click={() => (shopOpen = true)}>Store</button>

	<Shop bind:open={shopOpen} />
</section>

<style lang="scss">
	section {
		position: absolute;
		top: 0;
		left: 0;
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

		transition: background-color 0.2s, color 0.2s, transform 0.1s, opacity 0.2s;
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
