<script>
	import Window from '$lib/Window.svelte';

	export let open = false;
</script>

{#if open}
	<Window on:close={() => (open = false)} title="Store">
		<ul>
			{#each itemShopItem as { icon, name, price, description }}
				<li role="button">
					<h1>{name}</h1>
					<p>{description}</p>
				</li>
			{/each}
		</ul>
	</Window>
{/if}

<style lang="scss">
</style>
