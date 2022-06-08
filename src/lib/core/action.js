// actions and animations

// transition = (node: HTMLElement, params: any) => {
// 	delay?: number,
// 	duration?: number,
// 	easing?: (t: number) => number,
// 	css?: (t: number, u: number) => string,
// 	tick?: (t: number, u: number) => void
// }

// "intro animation"
export function transformIn(node, opt) {
	const existingTransform = getComputedStyle(node).transform.replace('none', '');

	return {
		delay: opt.delay || 0,
		duration: opt.duration || 400,
		easing: opt.easing,
		css: (t, u) =>
			`transform: ${existingTransform} scale(${t}) perspective(500px) translateY(${
				u * -1000
			}px)  rotateX(${t * -180}deg)`
	};
}

export function fadeIn(node, opt) {
	return {
		delay: opt.delay || 0,
		duration: opt.duration || 400,
		easing: opt.easing,
		css: (t, u) => `opacity: ${t}`
	};
}
