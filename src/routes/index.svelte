<script>
	import Click from '$lib/Click.svelte';
	import { clicks } from '$lib/stats';
</script>

<article>
	<h1>fun had:</h1>
	<p>
		{$clicks.toLocaleString('en-US')}
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

	h1,
	p {
		user-select: none;
	}
	h1 {
		font-size: 0.8em;
		margin: 0;
	}
	p {
		font-size: 3em;
		text-align: center;
	}
</style>
