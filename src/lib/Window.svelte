<script>
	import { createEventDispatcher } from 'svelte';
	export let title = 'hmm';

	const dispatch = createEventDispatcher();
	function close() {
		console.log('close');
		dispatch('close');
	}
</script>

<div class="w" on:click={() => close()}>
	<div on:click|stopPropagation>
		<h1>{title}</h1>
		<button on:click={() => close()}>x</button>
	</div>
	<section on:click|stopPropagation>
		<slot />
	</section>
</div>

<style lang="scss">
	.w {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		padding: 20px;

		display: grid;
		gap: 0.25em;
		grid-auto-flow: row;
		grid-template-columns: max-content;
		grid-template-rows: max-content;

		justify-content: center;
		align-content: center;

		& > div {
			border-radius: 8px;
			background-color: var(---bg);
			color: var(---fg);
			display: flex;
			justify-content: space-between;
			& > h1 {
				font-size: 1.4em;
				margin: 0 0.5em;
			}
			& > button {
				border: none;
				background-color: var(---fg);
				color: var(---bg);
				margin: 3px;
				border-radius: 8px;
				padding: 0.25em 0.5em;
			}
		}

		& > section {
			margin-bottom: auto;
			padding: 8px;
			color: var(---bg);
			background-color: var(---fg);
			border-radius: 8px;
		}

		&::after {
			content: '';
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.8);

			@supports (backdrop-filter: blur(3px)) {
				background-color: rgba(0, 0, 0, 0.6);
				backdrop-filter: blur(3px);
			}
		}
	}
</style>
