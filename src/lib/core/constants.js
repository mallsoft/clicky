export function getPrice(id, alreadyOwned) {
	if (!itemShopItems[id]) throw 'Item not found';
	const { basePrice, priceFactor } = itemShopItems[id];

	const b = Number(basePrice);
	const pf = priceFactor || 2;
	const owned = alreadyOwned || 0;

	return BigInt(Math.round(b * pf ** owned));
}

export const itemShopItems = {
	robo: {
		name: 'Roboclick',
		basePrice: 100n,
		priceFactor: 2.5,
		maxOwned: 30,
		description: 'Clicks automatically for you every second, mostly.',
		icon: '🤖'
	},
	wax: {
		name: 'Robo Click 5g Wax ',
		basePrice: 800n,
		priceFactor: 4,
		maxOwned: 5,
		description: 'Waxinate robo wifi thrusters, and increase efficiency of robo clicks.',
		icon: '📡'
	}
};
