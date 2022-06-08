<script>
	import { hitStack } from '$lib/core/stores';

	function getRnd() {
		return Math.random() * 200 - 100;
	}
</script>

<ul>
	{#each $hitStack as hit (hit)}
		<li style:--px="{getRnd()}%" style:--py="{getRnd()}%" class:crit={hit.crit}>
			{hit.announce}
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
		font-size: 3em;

		z-index: 1;

		pointer-events: none;
		user-select: none;
	}

	li {
		position: fixed;
		top: 20%;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		width: min-content;
		height: min-content;

		animation: fadein 0.3s ease-in-out forwards;

		&.crit {
			color: var(---fgb);
		}
	}

	@keyframes fadein {
		to {
			filter: opacity(0) blur(2px);
			transform: translate(calc(var(--px) * 3), calc(var(--py) * 3)) scale(1.5);
		}
		60% {
			filter: opacity(1);
		}
		from {
			filter: opacity(0.3);
			transform: translate(calc(var(--px)), calc(var(--py))) rotate(30deg) scale(0.3);
		}
	}
</style>
