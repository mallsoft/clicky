import { browser } from '$app/env';
import { writable, get } from 'svelte/store';
import { getPrice, itemShopItems } from './constants';

const _clicksKey = 'a';

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

export const hitStack = (() => {
	const max_stack = 30;
	const { subscribe, update } = writable([]);
	return {
		subscribe,
		announce: (announce, opt) => {
			update((n) => {
				//TODO: maybe instead use a queue that sums up the last n values if queue is full
				return [
					...n.filter((v) => Date.now() - v.time < 350).slice(-max_stack),
					{ announce, time: Date.now(), ...opt }
				];
			});
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
				saveStore(res, _clicksKey);
				return res;
			});
		},
		sub: (v) => {
			update((n) => {
				const res = n - v;
				saveStore(res, _clicksKey);
				return res;
			});
		}
	};
})();

export const ownedItems = (() => {
	const _key = _clicksKey + 'o';
	const _store = loadStore(_key);

	const { subscribe, update } = writable(_store ? JSON.parse(_store) : {});
	return {
		subscribe,
		buy: (id) => {
			update((n) => {
				const current = itemShopItems[id];
				if (!current) return n;
				const fullPrice = getPrice(id, n[id]);

				if (fullPrice > get(clicks)) return n;
				if (n[id] >= current.maxOwned) return n;

				clicks.sub(fullPrice);

				n[id] = (n[id] || 0) + 1;

				saveStore(JSON.stringify(n), _key);
				return n;
			});
		}
	};
})();
