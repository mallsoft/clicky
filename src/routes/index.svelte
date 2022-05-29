<script>
	import Click from '$lib/Click.svelte';
	import Score from '$lib/Score.svelte';
	import { onMount } from 'svelte';

	const titles = [
		'fun had',
		'self worth',
		'hours procrastinated',
		'happiness rating',
		'memes shared',
		'days untill we all die',
		'bugs squashed',
		'furries currently doing it',
		'rolls of toilet paper used',
		'reminders sent',
		'gotta keep it real',
		'screw you guys im just a bot',
		'i love you',
		'alarms ignored',
		'public farts'
	];
	let title = titles[Math.floor(Math.random() * titles.length)];

	onMount(() => {
		const interv = setInterval(() => {
			title = titles[Math.floor(Math.random() * titles.length)];
		}, 5000 + Math.floor(Math.random() * 15000));

		return () => {
			clearInterval(interv);
		};
	});
</script>

<article>
	<h1>{title}</h1>
	<Score />
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
</style>
