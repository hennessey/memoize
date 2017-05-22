function memoize(f) {
	var cache = {};

	return function() {
		var args = JSON.stringify(arguments);
		if (cache[args]) {
			return cache[args];
		} else {
			var output = f.apply(this, arguments);
			cache[args] = output;

			return output;
		}
	};
};
