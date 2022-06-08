<script>
	import { clicks, hitStack } from '$lib/core/stores';
	import Loops from './Loops.svelte';

	let repeat = false;
</script>

<button
	id="click"
	on:keydown={(ev) => {
		repeat = ev.repeat;
	}}
	on:keyup={(ev) => {
		repeat = false;
	}}
	on:click={(ev) => {
		if (repeat) {
			return;
		}
		clicks.add(1n);
		hitStack.announce(1);
	}}
>
	<span>Click</span>

	<Loops />
</button>

<style lang="scss">
	#click {
		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;

		border: none;
		color: var(---bg);
		background: var(---fga);
		font-size: 1.5em;

		aspect-ratio: 1;
		width: clamp(140px, 20%, 180px);
		min-width: min-content;
		border-radius: 100%;

		border: 3px solid var(---bg);

		box-shadow: 0 5px 1px 1px var(---shadow), 0 10px 1px 1px var(---shadow);
		transform: perspective(200px) rotateX(10deg);

		transition-property: filter, box-shadow, transform;
		transition-duration: 0.2s, 0.2s, 0.2s;

		&::after {
			position: absolute;
			content: '';
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			margin: auto;
			width: 90%;
			height: 90%;
			border-radius: 100%;
			z-index: -1;
			background: linear-gradient(-0.1turn, rgba(255, 255, 255, 0), 80%, white);
			transition: opacity 0.2s;
		}

		&:hover {
			filter: brightness(1.05);
			&::after {
				opacity: 0.5;
			}
		}
		&:active {
			box-shadow: 0 0 1px 3px var(---shadow), 0 10px 1px 1px var(---shadow);
			filter: brightness(1.1);
			transform: perspective(300px) rotateX(15deg) translateY(5px) translateZ(-20px);

			transition-property: filter, box-shadow, transform;
			transition-duration: 0.06s, 0.06s, 0.06s;
		}
		span {
			transform: translateY(15%);
		}
	}
</style>
