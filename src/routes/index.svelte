<script>
	import Click from '$lib/Click.svelte';
	import { clicks } from '$lib/stats';

	$: value = $clicks.toLocaleString('en-US');
</script>

<article>
	<h1>fun had:</h1>
	<p style:--vlen={value.length}>
		{value}
	</p>
	<Click />
</article>

<style>
	article {
		flex: 1;
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		user-select: none;
	}
	h1 {
		font-size: 0.8em;
		margin: 0;
	}
	p {
		font-size: min(calc((100vw * 1.6) / var(--vlen)), 3em);
		text-align: center;
	}
</style>
