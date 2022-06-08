<script>
	import Bots from './Bots.svelte';
	import { ownedItems } from '$lib/core/stores';
</script>

{#if $ownedItems.robo}
	<Bots />
{/if}
