<script>
	import { clicks } from '$lib/core/stores';

	$: value = $clicks.toLocaleString('en-US');
</script>

<p style:--vlen={value.length} class:hide={$clicks == 0}>
	{value}
</p>

<style>
	p {
		margin-bottom: 40px;

		color: var(---fg);
		user-select: none;
		font-size: min(calc((100vw * 1.6) / var(--vlen)), 5em);
		text-align: center;
		text-shadow: 3px 3px 1px var(---shadow), 6px 6px 1px var(---shadow), 9px 9px 3px var(---shadow);

		transition: opacity 0.2s;
	}

	.hide {
		opacity: 0;
	}
</style>
