<script>
	import { clicks, hitStack, ownedItems } from '$lib/core/stores';
	import { itemShopItems } from '$lib/core/constants';
	import { onMount } from 'svelte';
	import { createTimer } from '$lib/core/utils';

	function addPoints() {
		const w = $ownedItems.wax;
		const crit = w && Math.random() < w / 10;
		const p = (w ? w + 1 : 1) * (crit ? 4 : 1);
		hitStack.announce(p, { crit });
		clicks.add(BigInt(p));
	}

	function createBots(botCount) {
		const bots = [];
		for (let i = 0; i < botCount; i++) {
			bots.push({
				icon: itemShopItems.robo.icon,
				timer: createTimer(1000, Math.random() * 1000, () => {
					addPoints();
				})
			});
		}
		return bots;
	}

	$: bots = createBots($ownedItems.robo);
	$: wax = $ownedItems.wax && Array($ownedItems.wax).fill(itemShopItems.wax.icon);

	onMount(() => {
		return () =>
			bots.forEach((bot) => {
				bot.timer.clear();
			});
	});
</script>

<div>
	{#each wax as icon, i}
		<span style:--idx={i + 10 * Math.random()}>{icon}</span>
	{/each}
	{#each bots as { icon }, i}
		<span style:--idx={i + 1}>{icon}</span>
	{/each}
</div>

<style lang="scss">
	div {
		position: absolute;
		height: 100%;
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		animation: bobb 30s infinite alternate;
	}

	@keyframes bobb {
		to {
			transform: perspective(500px) rotate3d(0.1, 0, 1, 180deg);
		}
	}

	span {
		position: absolute;

		transform-origin: 253% 253%;
		animation: rotate calc(1s * var(--idx) + 6s) infinite;
	}

	@keyframes rotate {
		from {
			transform: translate(-200%, -200%) rotate(0deg);
		}
		to {
			transform: translate(-200%, -200%) rotate(360deg);
		}
	}
</style>
