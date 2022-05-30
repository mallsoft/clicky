<script>
	import ClickAnnouncer from '$lib/ClickAnnouncer.svelte';

	import Click from '$lib/Click.svelte';
	import Score from '$lib/Score.svelte';
</script>

<section>
	<ClickAnnouncer />
	<Score />
	<Click />
</section>

<style>
	section {
		flex: 1;

		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
