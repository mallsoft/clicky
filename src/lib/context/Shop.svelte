<script>
	import Window from '$lib/context/Window.svelte';
	import { itemShopItems, getPrice } from '$lib/core/constants';
	import { clicks, ownedItems } from '$lib/core/stores';

	export let open = false;

	$: items = Object.entries(itemShopItems).map(([id, item]) => {
		const ownedCount = $ownedItems[id] || 0;
		const price = getPrice(id, ownedCount);
		return {
			id,
			price,
			locked: price > $clicks || ownedCount >= (item.maxOwned || Infinity),
			ownedCount,
			...item
		};
	});
</script>

{#if open}
	<Window on:close={() => (open = false)} title="Click Shop">
		<h1>
			Clicks: {$clicks.toLocaleString('en-US')}
		</h1>
		<ul>
			{#each items as { id, icon, name, description, price, locked, ownedCount, maxOwned }}
				<li role="button" on:click={() => ownedItems.buy(id)} class:locked>
					<div>
						<h2><span>{icon}</span> {name}</h2>
						<h3>
							{price.toLocaleString('en-US')}
						</h3>
					</div>
					<p>{ownedCount} of {maxOwned || '∞'}</p>
					<p>{description}</p>
				</li>
			{/each}
		</ul>
	</Window>
{/if}

<style lang="scss">
	h1 {
		font-size: 1em;
		margin: 0 0.5em 0.5em;
	}

	h2 {
		font-size: 1.2em;
	}

	h3 {
		font-size: 1em;
	}

	ul {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	li {
		user-select: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0.5em;
		border-radius: 8px;
		border: 2px solid var(---fga);
		transition: background-color 0.1s, transform 0.05s;
		&.locked {
			opacity: 0.5;
			pointer-events: none;
		}
		&:hover {
			background-color: var(---fgb);
			color: var(---bg);
		}
		&:active {
			transform: translateY(2px);
		}
		p {
			font-style: italic;
		}

		div {
			display: flex;
			justify-content: space-between;
		}
	}
</style>
