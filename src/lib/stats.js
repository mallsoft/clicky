import { browser } from '$app/env';
import { writable } from 'svelte/store';

function saveStore(value, key) {
	localStorage.setItem(key, value);
}

function loadStore(key, d = null) {
	if (!browser) return d;
	const storage = localStorage.getItem(key);
	return storage ? storage : d;
}

function createClickStore() {
	const { subscribe, set, update } = writable(BigInt(loadStore('clicks', 0)));
	return {
		subscribe,
		set: (v) => {
			set(v);
			saveStore(v, 'clicks');
		}
	};
}

export const clicks = createClickStore();
