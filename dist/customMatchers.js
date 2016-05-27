'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _hasBehaviour(obj, sym) {
	var result = {};
	if ((typeof sym === 'undefined' ? 'undefined' : _typeof(sym)) === 'symbol') {
		return {
			pass: false,
			message: 'Not a valid symbol'
		};
	}

	return {
		pass: typeof actual[sym] === 'function'
	};
}

exports.default = {

	hasBehaviour: function hasBehaviour(util) {
		return { compare: function compare(actual, expected) {
				return _hasBehaviour(obj, expected);
			} };
	},

	isIterable: function isIterable(util) {
		return { compare: function compare(actual) {
				return _hasBehaviour(obj, Symbol.iterator);
			} };
	},

	isMatchable: function isMatchable(util) {
		return { compare: function compare(actual) {
				return _hasBehaviour(obj, Symbol.match);
			} };
	},

	isSearchable: function isSearchable(util) {
		return { compare: function compare(actual) {
				return _hasBehaviour(obj, Symbol.search);
			} };
	},

	isSplittable: function isSplittable(util) {
		return { compare: function compare(actual) {
				return _hasBehaviour(obj, Symbol.split);
			} };
	}
};