<script>
	import { clicks } from '$lib/stores';

	$: value = $clicks.toLocaleString('en-US');
</script>

<p style:--vlen={value.length}>
	{value}
</p>

<style>
	p {
		color: var(---fg);
		user-select: none;
		font-size: min(calc((100vw * 1.6) / var(--vlen)), 5em);
		text-align: center;
		text-shadow: 3px 3px 1px var(---shadow), 6px 6px 1px var(---shadow), 9px 9px 3px var(---shadow);
	}
</style>
