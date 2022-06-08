export function rafloop(callback) {
	let _frameId = null;
	let _lastTime = null;
	let _delta = 0;

	function frame(t) {
		_delta += (t - _lastTime) / 1000;
		_lastTime = t;
		callback(t, _delta);
		_frameId = requestAnimationFrame(frame);
	}

	function cancel() {
		cancelAnimationFrame(_frameId);
	}

	return {
		start: () => {
			if (_frameId === null) {
				frame();
			}
		},
		stop: () => {
			cancel();
		}
	};
}

export function createTimer(interval, offset, callback) {
	let inter = setTimeout(() => {
		inter = setInterval(() => {
			callback();
		}, interval);
	}, offset);

	return {
		clear: () => {
			clearInterval(inter);
		}
	};
}
