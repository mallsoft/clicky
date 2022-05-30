import { browser } from '$app/env';
import { get, writable } from 'svelte/store';

const _clicksKey = 'okew3';

function enx(str, key) {
	let res = '';
	for (let i = 0; i < str.length; i++) {
		res += String.fromCharCode(str.charCodeAt(i) ^ key.charCodeAt(i % key.length));
	}
	return res;
}

function saveStore(value, key) {
	if (!browser) return;
	const v = window.btoa(value);
	localStorage.setItem(key, enx(v, key));
}

function loadStore(key, d = null) {
	if (!browser) return d;
	const storage = localStorage.getItem(key);
	if (!storage) return d;
	return window.atob(enx(storage, key));
}

export const clickLog = (() => {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		push: (v) => {
			update((n) => [...n, { score: v, time: Date.now() }]);
		},
		pop: () => {
			update((n) => n.slice(1));
		},
		clearOld: () => {
			update((n) => n.filter((v) => Date.now() - v.time < 350));
		}
	};
})();

export const clicks = (() => {
	const { subscribe, set, update } = writable(BigInt(loadStore(_clicksKey, 0n)));
	return {
		subscribe,
		set: (v) => {
			set(v);
			saveStore(v, _clicksKey);
		},
		add: (v) => {
			update((n) => {
				const res = n + v;
				clickLog.push(v);
				saveStore(res, _clicksKey);
				return res;
			});
		}
	};
})();
