<script>
	import '../app.scss';
	import Menubar from '$lib/Menubar.svelte';
</script>

<!-- <Menubar /> -->
<main>
	<slot />
</main>

<style lang="scss">
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		animation: fadeIn 0.5s ease-in;

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: translateY(-10px);
			}
			to {
				opacity: 1;
			}
		}
	}
</style>
