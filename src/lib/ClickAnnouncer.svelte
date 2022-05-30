<script>
	import { onMount } from 'svelte';

	import { clickLog } from './stores';

	function getRnd() {
		return Math.random() * 200 - 100;
	}

	onMount(() => {
		const intr = setInterval(() => {
			$clickLog.length > 0 && clickLog.clearOld();
		}, 100);

		return () => clearInterval(intr);
	});
</script>

<ul>
	{#each $clickLog as s (s)}
		<li style:--px="{getRnd()}%" style:--py="{getRnd()}%">
			+{s.score}
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		pointer-events: none;
		font-size: 3em;
	}

	li {
		position: fixed;
		top: -20%;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: min-content;
		height: min-content;

		animation: fadein 0.5s ease-in-out forwards;
	}

	@keyframes fadein {
		from {
			filter: opacity(0);
			transform: translate(calc(var(--px) * 10), calc(var(--py) * 10)) scale(3);
		}
		60% {
			filter: opacity(1);
		}
		to {
			filter: opacity(0) blur(20px);
			transform: translate(calc(var(--px) * 4), calc(var(--py) * 4));
		}
	}
</style>
