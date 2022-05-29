<script>
	import { clicks } from './stats';

	let repeat = false;
</script>

<input
	type="button"
	name="clicker"
	id="click"
	value={$clicks > 0n ? 'more' : 'click'}
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
		$clicks += 1n;
	}}
/>

<style lang="scss">
	#click {
		margin: 1em;

		border: none;
		color: var(---bg);
		background: var(---fg);
		font-size: 1.5em;

		aspect-ratio: 1;
		width: 12%;
		border-radius: 100%;

		border: 1px solid var(---bg);

		box-shadow: 0 0 10px 2px var(---shadow);

		transition: filter 0.2s, box-shadow 0.2s;

		&:hover {
			filter: brightness(1.1);
		}
		&:active {
			box-shadow: 0 0 5px 2px var(---shadow);
		}
	}
</style>
