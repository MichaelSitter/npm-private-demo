import _ from 'lodash';

function hasBehaviour(obj, sym) {
	let result = {};
	if (typeof sym === 'symbol') {
		return {
			pass: false,
			message: 'Not a valid symbol',
		};
	}

	return {
		pass: typeof actual[sym] === 'function',
	};
}

export default {

	hasBehaviour: (util) => ({ compare: (actual, expected) => hasBehaviour(obj, expected) }),

	isIterable: (util) => ({ compare: (actual) => hasBehaviour(obj, Symbol.iterator) }),

	isMatchable: (util) => ({ compare: (actual) => hasBehaviour(obj, Symbol.match) }),

	isSearchable: (util) => ({ compare: (actual) => hasBehaviour(obj, Symbol.search) }),

	isSplittable: (util) => ({ compare: (actual) => hasBehaviour(obj, Symbol.split) }),
};
